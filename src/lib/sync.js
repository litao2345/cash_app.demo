import {database, define, drop} from '@/lib/websql'

const del = 0
if (del) drop()

/**
 * [window 全局参数]
 */
const URL = window.Url + 'api/'

/**
 * [sync 数据同步类]
 */
const sync = {
  /**
   * [online 同步线上数据]
   * @param {[Array]}  requests [请求队列]
   * @param {[Object]} steps    [同步进度]
   * @param {[Object]} that     [Vue大对象]
   * @return {[Object]} [同步进度]
   */
  online: async (requests, steps, that) => {
    steps.name = '正在初始化基础配置'
    const d = await define()
    if (!d) {
      steps.name = '初始化失败，请检查系统环境'
      return
    }

    const max = requests.length
    const $log = JSON.parse(sessionStorage.getItem('log'))
    for (let item of requests) {
      try {
        steps.name = '正在同步数据：' + item.name

        const r = await new Promise((resolve, reject) => {
          const url = URL + item.url
          that.$http.jsonp(url, {params: $log}).then((rt) => {
            if (rt.body.code === 0) {
              resolve(rt.body.data)
            } else {
              reject(rt.body)
            }
          }, (xhr, type, errorThrown) => {
            reject(type)
          })
        })

        const index = requests.indexOf(item) + 1
        steps.percent = parseInt((index / max) * 100)

        if (max === index) steps.name = '正在为您载入界面，请稍后'

        console.log(index, item.name, r)
      } catch (err) {
        steps.name = '同步失败，请检查网络环境'
        break
      }
    }
  },

  /**
   * [adv 店铺广告图]
   * @param {[Object]} datas [传参]
   * @return {[]} []
   */
  adv: async (that) => {
    const db = database()
    let tb = db.instance('sync_time')
    let $d = {
      last_time: 0
    }

    const off = await tb.get('key="sync_adv"', (row) => {
      if (row.length) $d.last_time = row[0]['sync_time']
    })
    console.log(off)

    Object.assign($d, JSON.parse(sessionStorage.getItem('log')))
    const on = await new Promise((resolve, reject) => {
      const url = URL + 'getShopAdv'
      that.$http.jsonp(url, {params: $d}).then((rt) => {
        if (rt.body.code === 0) {
          resolve(rt.body.data)
        } else {
          reject(rt.body)
        }
      }, (xhr, type, errorThrown) => {
        reject(type)
      })
    })
    console.log(on)

    window.core.ajax('getShopAdv', $d, 'GET', (rt) => {
      if (rt.body.data.adv) {
        tb = db.instance('adv_img')
        for (let i = 0; i < rt.data.adv.length; i++) {
          let item = rt.data.adv[i]

          if (parseInt(item.is_del) === 1 || parseInt(item.state) === 0) {
            db.del('adv_img', 'id=' + item.id)
          } else {
            const data = {
              id: item.id,
              img: item.img,
              number: item.number
            }
            db.save('adv_img', data, 'id')
          }
        }
      }

      tb = db.instance('sync_time')
      tb.save('sync_time', {'sync_time': rt.data.time, 'key': 'sync_adv'}, 'key')
    })
  },

  // 店铺活动信息
  activity: (cbk) => {
    window.core.ajax('getDiscountProgram', {}, 'GET', (rt) => {
      // if (rt.data) {
      //     window.activity = rt.data.activity
      //     window.goods_activity = rt.data.goods_activity
      // }

      if (cbk) cbk()
    })
  },

  // 积分兑换商品列表
  gift: (cb) => {
    window.core.ajax('getExchangeGoods', {}, 'GET', (rt) => {
      if (rt.data) window.gift = rt.data.list

      if (cb) cb()
    })
  },

  goods_cate: (cb) => {
    const db = database()
    db.get('sync_time', 'key="sync_goods_cate"', (row) => {
      let lastTime = 0
      if (row.length > 0) {
        lastTime = row[0].sync_time
      }

      window.core.ajax('getCashGoodsCate', {last_time: lastTime}, 'GET', (rt) => {
        if (rt.data.cates) {
          for (let i = 0; i < rt.data.cates.length; i++) {
            const item = rt.data.cates[i]
            if (item.state === 1) {
              db.del('goods_cate', 'cate_id=' + item.id)
            } else {
              const data = {
                cate_id: item.id,
                name: item.name,
                pid: item.pid,
                create_time: item.create_time,
                update_time: item.create_time
              }
              db.save('goods_cate', data, 'cate_id')
            }
          }

          db.save('sync_time', {'sync_time': rt.data.time, 'key': 'sync_goods_cate'}, 'key')
        }

        if (cb) cb()
      })
    })
  },

  goods_unit: (cb) => {
    const db = database()
    window.core.ajax('getCashGoodsUnit', {}, 'GET', (rt) => {
      if (rt.data) {
        for (let i = 0; i < rt.data.length; i++) {
          const item = rt.data[i]
          const data = {
            id: item.id,
            name: item.name
          }
          db.save('goods_unit', data, 'id')
        }
      }

      if (cb) cb()
    })
  },

  goods: (cb) => {
    const db = database()
    db.get('sync_time', 'key="sync_goods"', (row) => {
      let lastTime = 0
      if (row.length > 0) {
        lastTime = row[0].sync_time
      }

      window.core.ajax('getCashGoods', {last_time: lastTime}, 'GET', (rt) => {
        let list = []

        if (rt.data.goods) {
          if (!lastTime) {
            // 全量更新
            for (let i = 0; i < rt.data.goods.length; i++) {
              let item = rt.data.goods[i]

              list.push({
                goods_id: item.id,
                code: item.code,
                name: item.name,
                py: item.py,
                img: item.img,
                cate_id: item.cate_id,
                cate_name: item.cate_name,
                unit_id: item.unit_id,
                unit_name: item.unit_name,
                price: item.price,
                description: item.description,
                create_time: item.create_time,
                update_time: item.create_time,
                is_del: 0,
                print_tag: item.print_tag,
                goods_cate: item.goods_cate,
                property: JSON.stringify(item.property),
                format: JSON.stringify(item.format),
                is_weight: item.is_weight
              })
            }

            for (let i = 0; i < list.length; i++) {
              db.insert('goods', list[i])
            }
          } else {
            for (let i = 0; i < rt.data.goods.length; i++) {
              let item = rt.data.goods[i]

              if (item.is_del === '1' || item.state !== '1') {
                db.save('goods', {goods_id: item.id, is_del: 1}, 'goods_id')
              } else {
                const goodsDatas = {
                  goods_id: item.id,
                  code: item.code,
                  name: item.name,
                  py: item.py,
                  img: item.img,
                  cate_id: item.cate_id,
                  cate_name: item.cate_name,
                  unit_id: item.unit_id,
                  unit_name: item.unit_name,
                  price: item.price,
                  description: item.description,
                  create_time: item.create_time,
                  update_time: item.update_time,
                  print_tag: item.print_tag,
                  goods_cate: item.goods_cate,
                  property: JSON.stringify(item.property),
                  format: JSON.stringify(item.format),
                  is_weight: item.is_weight
                }

                db.save('goods', goodsDatas, 'goods_id')
              }
            }
          }

          db.save('sync_time', {'sync_time': rt.data.time, 'key': 'sync_goods'}, 'key')
          const diff = new Date().getTime() - (rt.data.time * 1000)
          db.save('cash_conf', {'name': 'diff_time', 'val': diff}, 'name')
          window.core.diff_time = diff
          console.log('与服务器时间差:' + diff)

          if (cb) cb()
        }
      })
    })
  },

  orders: (cb) => {
    const db = database()
    db.get('sync_time', 'key="sync_orders"', (row) => {
      let lastTime = 0
      if (row.length > 0) {
        lastTime = row[0].sync_time
      }

      window.core.ajax('get_shop_order', {last_time: lastTime}, 'GET', (rt) => {
        let list = []

        if (rt.data.orders) {
          for (let i = 0; i < rt.data.orders.length; i++) {
            const item = rt.data.orders[i]
            list.push({
              local_order_no: item.local_order_no,
              order_no: item.order_no,
              money: item.money,
              real_pay_money: item.real_pay_money,
              change_money: item.change_money,
              goods: item.goods,
              uid: item.manager_uid,
              create_time: item.create_time,
              state: item.state,
              pay_type: item.pay_type,
              sync: 1,
              pay_state: item.pay_state,
              order_cate: item.order_cate,
              remarks: item.remarks,
              card_no: item.card_no,
              uncleared_money: item.uncleared_money
            })
          }

          for (let i = 0; i < list.length; i++) {
            db.save('orders', list[i], 'order_no')
          }

          db.save('sync_time', {'sync_time': rt.data.time, 'key': 'sync_orders'}, 'key')
        }

        if (cb) cb()
      })
    })
  }

  // register_device: (cb) => {
  //   const db = database()
  //   db.get('cash_conf', 'name="device"', (row) => {
  //     if (row !== null && row.length > 0) {
  //       if (cb) cb()
  //       window.device_no = row[0].val
  //       return 0
  //     }

  //     var deviceInfo = window.get_device_info()
  //     window.core.ajax('registerDevice', {device_info: deviceInfo.info, device_type: 1, uuid: deviceInfo.uuid}, 'GET', (rt) => {
  //       if (!rt.code) {
  //         window.device_no = rt.data.device_no
  //         db.save('cash_conf', {name: 'device', 'val': rt.data.device_no}, 'id')
  //         if (cb) cb()
  //       }
  //     })
  //   })
  // },

  // kds: (cb) => {
  //   const db = database()
  //   const kdsIpds = window.GetKdsIp()
  //   if (kdsIpds.length) {
  //     db.get('goods', 'is_del=0 OR is_del IS NULL', (rows) => {
  //       let newGoods = []

  //       for (let i = 0; i < rows.length; i++) {
  //         const goods = rows[i]
  //         newGoods.push({
  //           name: goods.name,
  //           price: goods.price,
  //           img: goods.img,
  //           state: goods.state
  //         })
  //       }

  //       const postdata = {
  //         goods: JSON.stringify(newGoods),
  //         cmd: window.KDS_COMMAND.SYNC_GOODS
  //       }

  //       for (let i = 0; i < kdsIpds.length; i++) {
  //         const ip = kdsIpds[i]
  //         window.send_kds(ip, postdata)
  //       }
  //     })

  //     // 同步商品分类
  //     db.get('goods_cate', (rows) => {
  //       const postdata = {
  //         goods_cate: JSON.stringify(rows),
  //         cmd: window.KDS_COMMAND.SYNC_GOODS_CATE
  //       }

  //       for (let i = 0; i < kdsIpds.length; i++) {
  //         const ip = kdsIpds[i]
  //         window.send_kds(ip, postdata)
  //       }
  //     })

  //     // 同步账号
  //     for (let i = 0; i < kdsIpds.length; i++) {
  //       const ip = kdsIpds[i]
  //       const postdata = {
  //         info: JSON.stringify({
  //           user: window.get_user_info(window.get_member_uid()),
  //           company_id: window.get_company_id(),
  //           shop_id: window.get_shop_id()
  //         }),
  //         cmd: window.KDS_COMMAND.SYNC_ACCOUNT
  //       }

  //       window.send_kds(ip, postdata)
  //     }

  //     // 同步中餐馆餐桌信息
  //     // 同步快捷餐厅餐桌信息
  //     window.shop_module.getShopTables({}, (rt) => {
  //       for (let i = 0; i < kdsIpds.length; i++) {
  //         const ip = kdsIpds[i]
  //         const postdata = {
  //           tables: JSON.stringify(rt.data.tables),
  //           cmd: window.KDS_COMMAND.SYNC_CHINESE_TABLES
  //         }
  //         window.send_kds(ip, postdata)
  //       }

  //       for (let i = 0; i < kdsIpds.length; i++) {
  //         const ip = kdsIpds[i]
  //         const postdata = {
  //           cmd: window.KDS_COMMAND.START
  //         }
  //         window.send_kds(ip, postdata)
  //       }

  //       if (cb) cb()
  //     })
  //   } else {
  //     if (cb) cb()
  //   }
  // }
}

const online = sync.online

export {
  online
}
