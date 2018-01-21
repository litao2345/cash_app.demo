import {_sync} from '@/lib/util'
import {_define, _drop, _del, _save, _get} from '@/lib/websql'

const del = 0
if (del) _drop()

/**
 * [sync 数据同步类]
 */
const sync = {
  /**
   * [init 初始化本地环境]
   * @param {[Array]}  inits [初始化队列]
   * @param {[Object]} steps [同步进度]
   * @return {[Boolean]} [结果返回值]
   */
  init: async (inits, steps) => {
    for (let item of inits) {
      if (steps) steps.name = '正在初始化：' + item.name
      let r = await sync[item.init]
      if (!r) return false
    }

    return true
  },

  /**
   * [online 同步线上数据]
   * @param {[Array]}    requests [请求队列]
   * @param {[Function]} http     [网络请求]
   * @param {[Object]}   steps    [同步进度]
   * @return {[Boolean]} [结果返回值]
   */
  online: async (requests, http, steps) => {
    const max = requests.length
    for (let item of requests) {
      try {
        if (steps) steps.name = '正在同步数据：' + item.name

        await sync[item.sync](item, http)

        const index = requests.indexOf(item) + 1
        if (steps) steps.percent = parseInt((index / max) * 100)
      } catch (err) {
        return false
      }
    }

    return true
  },

  /**
   * [offline 上传本地数据]
   * @return {[Boolean]} [结果返回值]
   */
  offline: async () => {
  },

  /**
   * [get_time 查询同步时间戳]
   * @param {[String]} value [字段值]
   * @return {[Object]} [同步时间戳]
   */
  get_time: async (value, type) => {
    let $d = {
      last_time: 0
    }

    const r = await _get('sync_time', ('key="' + value + '"'))
    if (!r) {
      return r
    } else {
      if (r.length) $d.last_time = r[0]['sync_time']
    }

    return $d
  },

  /**
   * [save_time 更新同步时间戳]
   * @param {[String]} value     [字段值]
   * @param {[String]} timestamp [同步时间戳]
   * @return {[Boolean]} [结果返回值]
   */
  save_time: async (value, timestamp) => {
    const data = {
      'key': value,
      'sync_time': timestamp
    }
    return _save('sync_time', data, 'key')
  },

  /**
   * [init_base 基础配置]
   * @return {[Boolean]} [结果返回值]
   */
  init_base: async () => {
    let r = await _define()
    return r
  },

  /**
   * [sync_adv 店铺广告图]
   * @param {[Object]}   request [请求]
   * @param {[Function]} http    [网络请求]
   * @return {[Boolean]} [结果返回值]
   */
  sync_adv: async (request, http) => {
    const $d = await sync.get_time(request.sync)
    if (!$d) return false

    // 同步数据
    let rt
    try {
      rt = await _sync(request.url, $d, http)
      console.log('return', rt.adv)
      if (!rt.adv.length) return true // 返回为空
    } catch (err) {
      return false
    }

    let data
    for (let item of rt.adv) {
      if (parseInt(item.is_del) === 1 || parseInt(item.state) === 0) {
        // 删除店铺广告图
        const r = await _del(request.db, ('id="' + item.id + '"'))
        if (!r) return r
      } else {
        // 更新店铺广告图
        data = {
          adv_id: item.id,
          img: item.img,
          number: item.number
        }
        const r = await _save(request.db, data, 'id')
        if (!r) return r
      }
    }

    // 更新基础配置
    data = {
      'name': 'diff_time',
      'val': new Date().getTime() - (rt.time * 1000)
    }
    const r = await _save('cash_conf', data, 'name')
    if (!r) return r

    return sync.save_time(request.sync, rt.time)
  },

  /**
   * [sync_activity 店铺活动信息]
   * @param {[Object]}   request [请求]
   * @param {[Function]} http    [网络请求]
   * @return {[Boolean]} [结果返回值]
   */
  sync_activity: async (request, http) => {
    // 同步数据
    let rt
    try {
      rt = await _sync(request.url, {}, http)
      console.log('return', rt.activity, rt.goods_activity)
    } catch (err) {
      return false
    }

    const data = {
      id: 1,
      activity: JSON.stringify(rt.activity),
      goods_activity: JSON.stringify(rt.goods_activity)
    }
    return _save(request.db, data, 'id')
  },

  /**
   * [sync_desks_cate 餐桌分类列表]
   * @param {[Object]}   request [请求]
   * @param {[Function]} http    [网络请求]
   * @return {[Boolean]} [结果返回值]
   */
  sync_desks_cate: async (request, http) => {
    const $d = await sync.get_time(request.sync)
    if (!$d) return false

    // 同步数据
    let rt
    try {
      rt = await _sync(request.url, $d, http)
      console.log('return', rt.list)
      if (!rt.list.length) return true // 返回为空
    } catch (err) {
      return false
    }

    let data
    for (let item of rt.list) {
      if (parseInt(item.is_del) === 1) {
        // 删除餐桌分类列表
        const r = await _del(request.db, ('cate_id="' + item.id + '"'))
        if (!r) return r
      } else {
        // 更新餐桌分类列表
        data = {
          cate_id: item.id,
          name: item.name,
          create_time: item.create_time,
          update_time: item.update_time
        }
        const r = await _save(request.db, data, 'cate_id')
        if (!r) return r
      }
    }

    return sync.save_time(request.sync, rt.time)
  },

  /**
   * [sync_desks 餐桌列表]
   * @param {[Object]}   request [请求]
   * @param {[Function]} http    [网络请求]
   * @return {[Boolean]} [结果返回值]
   */
  sync_desks: async (request, http) => {
    const $d = await sync.get_time(request.sync)
    if (!$d) return false

    // 同步数据
    let rt
    try {
      rt = await _sync(request.url, $d, http)
      console.log('return', rt.tables)
      if (!rt.tables.length) return true // 返回为空
    } catch (err) {
      return false
    }

    let data
    for (let item of rt.tables) {
      if (parseInt(item.is_del) === 1) {
        // 删除餐桌列表
        const r = await _del(request.db, ('desks_id="' + item.id + '"'))
        if (!r) return r
      } else {
        // 更新餐桌列表
        data = {
          desks_id: item.id,
          name: item.name,
          seat_cnt: item.seat_cnt,
          cate_id: item.cate_id,
          state: item.state,
          table_order_id: item.table_order_id,
          create_time: item.create_time,
          update_time: item.update_time
        }
        const r = await _save(request.db, data, 'desks_id')
        if (!r) return r
      }
    }

    return sync.save_time(request.sync, rt.time)
  },

  /**
   * [sync_goods_cate 商品分类列表]
   * @param {[Object]}   request [请求]
   * @param {[Function]} http    [网络请求]
   * @return {[Boolean]} [结果返回值]
   */
  sync_goods_cate: async (request, http) => {
    const $d = await sync.get_time(request.sync)
    if (!$d) return false

    // 同步数据
    let rt
    try {
      rt = await _sync(request.url, $d, http)
      console.log('return', rt.cates)
      if (!rt.cates.length) return true // 返回为空
    } catch (err) {
      return false
    }

    let data
    for (let item of rt.cates) {
      if (parseInt(item.state) === 1) {
        // 删除商品分类列表
        const r = await _del(request.db, ('cate_id="' + item.id + '"'))
        if (!r) return r
      } else {
        // 更新商品分类列表
        data = {
          cate_id: item.id,
          name: item.name,
          pid: item.pid,
          create_time: item.create_time,
          update_time: item.update_time
        }
        const r = await _save(request.db, data, 'cate_id')
        if (!r) return r
      }
    }

    return sync.save_time(request.sync, rt.time)
  },

  /**
   * [sync_goods_unit 商品单位列表]
   * @param {[Object]}   request [请求]
   * @param {[Function]} http    [网络请求]
   * @return {[Boolean]} [结果返回值]
   */
  sync_goods_unit: async (request, http) => {
    const $d = await sync.get_time(request.sync)
    if (!$d) return false

    // 同步数据
    let rt
    try {
      rt = await _sync(request.url, $d, http)
      console.log('return', rt)
      if (!rt.length) return true // 返回为空
    } catch (err) {
      return false
    }

    let data
    for (let item of rt) {
      // 更新商品单位列表
      data = {
        id: item.id,
        name: item.name
      }
      const r = await _save(request.db, data, 'id')
      if (!r) return r
    }

    return sync.save_time(request.sync, parseInt(new Date().getTime() / 1000))
  },

  /**
   * [sync_goods 商品列表]
   * @param {[Object]}   request [请求]
   * @param {[Function]} http    [网络请求]
   * @return {[Boolean]} [结果返回值]
   */
  sync_goods: async (request, http) => {
    const $d = await sync.get_time(request.sync)
    if (!$d) return false

    // 同步数据
    let rt
    try {
      rt = await _sync(request.url, $d, http)
      console.log('return', rt.goods)
      if (!rt.goods.length) return true // 返回为空
    } catch (err) {
      return false
    }

    let data
    for (let item of rt.goods) {
      // 更新商品列表
      data = {
        goods_id: item.id,
        code: item.code,
        name: item.name,
        price: item.price,
        img: item.img,
        description: item.description,
        py: item.py,
        cate_id: item.cate_id,
        cate_name: item.cate_name,
        unit_id: item.unit_id,
        unit_name: item.unit_name,
        goods_cate: item.goods_cate,
        print_tag: item.print_tag,
        property: JSON.stringify(item.property),
        format: JSON.stringify(item.format),
        is_weight: item.is_weight,
        is_del: item.is_del,
        create_time: item.create_time,
        update_time: item.update_time
      }
      const r = await _save(request.db, data, 'goods_id')
      if (!r) return r
    }

    return sync.save_time(request.sync, rt.time)
  },

  /**
   * [sync_orders 订单列表]
   * @param {[Object]}   request [请求]
   * @param {[Function]} http    [网络请求]
   * @return {[Boolean]} [结果返回值]
   */
  sync_orders: async (request, http) => {
    const $d = await sync.get_time(request.sync)
    if (!$d) return false

    // 同步数据
    let rt
    try {
      rt = await _sync(request.url, $d, http)
      console.log('return', rt.orders)
      if (!rt.orders.length) return true // 返回为空
    } catch (err) {
      return false
    }

    let data
    for (let item of rt.orders) {
      // 更新订单列表
      data = {
        local_order_no: item.local_order_no,
        order_no: item.order_no,
        order_cate: item.order_cate,
        money: item.money,
        real_pay_money: item.real_pay_money,
        change_money: item.change_money,
        uncleared_money: item.uncleared_money,
        goods: item.goods,
        uid: item.manager_uid,
        pay_type: item.pay_type,
        pay_state: item.pay_state,
        card_no: item.card_no,
        remarks: item.remarks,
        state: item.state,
        sync: 1,
        create_time: item.create_time
      }
      const r = await _save(request.db, data, 'order_no')
      if (!r) return r
    }

    return sync.save_time(request.sync, rt.time)
  },

  /**
   * [sync_gift 积分兑换商品列表]
   * @param {[Object]}   request [请求]
   * @param {[Function]} http    [网络请求]
   * @return {[Boolean]} [结果返回值]
   */
  sync_gift: async (request, http) => {
    // 同步数据
    let rt
    try {
      rt = await _sync(request.url, {}, http)
      console.log('return', rt.list)
    } catch (err) {
      return false
    }
  }

  // register_device: (cb) => {
  //   const db = _database()
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
  //   const db = _database()
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

const _init = sync.init
const _online = sync.online

export {
  _init,
  _online
}
