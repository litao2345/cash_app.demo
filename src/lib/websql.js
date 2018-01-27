/**
 * [websql 本地数据库类]
 */
const websql = {
  /**
   * [tables 数据表]
   */
  tables: {
    // 同步数据部分
    // 店铺广告图
    adv_img: {
      id: 'INTEGER PRIMARY KEY',
      adv_id: 'INTEGER', // 广告图ID
      img: 'TEXT',
      number: 'INTEGER'
    },
    // 店铺活动信息
    activity: {
      id: 'INTEGER PRIMARY KEY',
      activity: 'TEXT NOT NULL', // 活动列表：json数据
      goods_activity: 'TEXT NOT NULL' // 商品活动列表：json数据
    },
    // 餐桌分类列表
    desks_cate: {
      id: 'INTEGER PRIMARY KEY',
      cate_id: 'INTEGER', // 分类ID
      name: 'TEXT NOT NULL', // 分类名
      create_time: 'INTEGER',
      update_time: 'INTEGER'
    },
    // 餐桌列表
    desks: {
      id: 'INTEGER PRIMARY KEY',
      desks_id: 'INTEGER', // 餐桌ID
      name: 'TEXT NOT NULL', // 餐桌名
      seat_cnt: 'INTEGER', // 座位数
      cate_id: 'INTEGER', // 餐桌分类
      state: 'INTEGER', // 状态 (0空闲, 1开台, 2下单, 3加菜, 4减菜)
      table_order_id: 'INTEGER', // 餐桌当前订单号
      create_time: 'INTEGER',
      update_time: 'INTEGER'
    },
    // 商品分类列表
    goods_cate: {
      id: 'INTEGER PRIMARY KEY',
      cate_id: 'INTEGER',
      name: 'TEXT NOT NULL',
      pid: 'INTEGER',
      create_time: 'INTEGER',
      update_time: 'INTEGER'
    },
    // 商品单位列表
    goods_unit: {
      id: 'INTEGER PRIMARY KEY',
      name: 'VARCHAR(32)'
    },
    // 商品列表
    goods: {
      id: 'INTEGER PRIMARY KEY',
      goods_id: 'INTEGER',
      code: 'TEXT NOT NULL',
      name: 'TEXT NOT NULL',
      price: 'FLOAT',
      img: 'TEXT',
      description: 'TEXT NOT NULL',
      py: 'VARCHAR(50)',
      cate_id: 'INTEGER',
      cate_name: 'VARCHAR(50)',
      unit_id: 'INTEGER',
      unit_name: 'TEXT NOT NULL',
      goods_cate: 'INTEGER DEFAULT 0',
      print_tag: 'INTEGER DEFAULT 0',
      property: 'TEXT',
      format: 'TEXT',
      is_weight: 'INTEGER DEFAULT 0',
      is_del: 'INTEGER',
      sort_number: 'INTEGER DEFAULT 0',
      create_time: 'INTEGER',
      update_time: 'INTEGER'
    },
    // 订单列表
    orders: {
      id: 'INTEGER PRIMARY KEY',
      local_order_no: 'VARCHAR(100)', // 本地订单号
      order_no: 'VARCHAR(100)', // 云端订单号
      order_cate: 'INTEGER', // 订单类型
      money: 'FLOAT', // 总价
      real_pay_money: 'FLOAT', // 支付金额
      change_money: 'FLOAT', // 找零
      discount_money: 'FLOAT',
      uncleared_money: 'FLOAT',
      goods: 'TEXT NOT NULL', // 商品列表：json数据
      uid: 'INTEGER',
      pay_type: 'TEXT NOT NULL', // 支付方式：json数据
      pay_state: 'INTEGER', // 支付状态：0未支付，1已支付
      card_no: 'TEXT', // 会员卡号
      remarks: 'TEXT',
      state: 'INTEGER', // 订单状态0：正常，1：挂单，2：退单
      sync: 'INTEGER', // 同步状态：0未同步，1已同步
      create_time: 'INTEGER'
    },
    // 交班记录
    work_log: {
      id: 'INTEGER PRIMARY KEY',
      uid: 'INTEGER', // 用户ID
      start_time: 'INTEGER', // 接班卡时间(上班)
      end_time: 'INTEGER', // 交班卡时间(下班)
      total_money: 'FLOAT', // 实收总额
      cash_money: 'FLOAT', // 现金
      wechat_money: 'FLOAT', // 微信
      ali_money: 'FLOAT', // 支付宝
      bankcard_money: 'FLOAT', // 银行卡
      card_money: 'FLOAT', // 会员卡消费金额
      recharge_money: 'FLOAT', // 充值金额
      return_money: 'FLOAT', // 退款总额
      change_money: 'FLOAT', // 找零
      orders_cnt: 'INTEGER', // 交易单据总数
      put_orders_cnt: 'INTEGER', // 挂单总数
      bak_orders_cnt: 'INTEGER', // 退单总数
      state: 'INTEGER', // 状态：0未交班，1已交班
      sync: 'INTEGER' // 同步状态：0未同步，1已同步
    },
    // 退单记录
    order_return: {
      id: 'INTEGER PRIMARY KEY',
      order_cate: 'INTEGER', // 订单类型
      local_order_no: 'VARCHAR(100)', // 本地退单号
      return_order_no: 'VARCHAR(100)', // 退单号
      order_no: 'VARCHAR(100)', // 关联订单号
      money: 'FLOAT', // 应退款金额
      real_pay_money: 'FLOAT', // 实际退款金额
      goods: 'TEXT NOT NULL', // 商品列表：json数据
      uid: 'INTEGER',
      cancle_state: 'INTEGER', // 退款状态0：退款中，1：已完成
      pay_type: 'TEXT NOT NULL', // 支付方式：json数据
      remarks: 'TEXT',
      sync: 'INTEGER', // 同步状态：0未同步，1已同步
      create_time: 'INTEGER'
    },
    // 会员充值记录
    card_recharge: {
      id: 'INTEGER PRIMARY KEY',
      local_order_no: 'VARCHAR(100)', // 本地退单号
      order_no: 'VARCHAR(100)', // 关联订单号
      money: 'FLOAT', // 应收金额
      change_money: 'FLOAT', // 找零
      give_money: 'FLOAT', // 赠送金额
      real_pay_money: 'FLOAT', // 实际支付金额
      uid: 'INTEGER',
      pay_type: 'TEXT NOT NULL', // 支付方式：json数据
      remarks: 'TEXT',
      card_no: 'VARCHAR(100)',
      create_time: 'INTEGER'
    },

    // 本地数据部分
    // 基础设置
    cash_conf: {
      id: 'INTEGER_PRIMARK_KEY',
      name: 'VARCHAR(50) NOT NULL', // 设置名
      val: 'TEXT NOT NULL' // 设置值
    },
    // 日订单自增记录
    serial_number: {
      id: 'INTEGER PRIMARY KEY',
      number: 'INTEGER',
      day: 'DATE'
    },
    // 打印失败记录
    print_error_log: {
      id: 'INTEGER PRIMARY KEY',
      orderid: 'VARCHAR(50)',
      errmsg: 'VARCHAR(200)',
      create_time: 'INTEGER'
    },
    // 分类打印机设置
    goods_cate_print: {
      id: 'INTEGER PRIMARY KEY',
      cate_id: 'INTEGER',
      print_type: 'INTEGER',
      width: 'INTEGER',
      print_equipment: 'VARCHAR(80)',
      ip: 'VARCHAR(30)'
    },
    // 同步时间记录
    sync_time: {
      id: 'INTEGER PRIMARY KEY',
      key: 'VARCHAR(30)',
      sync_time: 'INTEGER'
    }
  },

  /**
   * [database 建库]
   * @return {[Object]} [实例化数据库]
   */
  database: () => {
    const $log = JSON.parse(sessionStorage.getItem('log'))
    const id = $log.shop_id

    const $d = {
      name: 'cashDb1_' + id,
      displayName: 'cashDb_' + id,
      version: 1.0,
      debug: false
    }

    // 数据库未建
    const $sync = JSON.parse(localStorage.getItem('sync'))
    if (!$sync || !$sync[id] || !$sync[id].length) $d.maxSize = 128 * 1024 * 1024

    return new window.WebsqlWrapper($d)
  },

  /**
   * [define 建表]
   * @return {[Boolean]} [结果返回值]
   */
  define: async () => {
    // webview存储周期同步数据
    const $log = JSON.parse(sessionStorage.getItem('log'))
    const id = $log.shop_id

    let $sync = JSON.parse(localStorage.getItem('sync'))
    if (!$sync) $sync = {}
    if (!$sync[id]) $sync[id] = []

    const keys = Object.keys(websql.tables)
    let rt = keys.length === $sync[id].length
    if (rt) return rt // 数据表已全建

    const db = _database()
    for (let index of keys) {
      try {
        // 数据表未建
        if ($sync[id].indexOf(index) === -1) {
          let item = websql.tables[index]
          const r = await new Promise((resolve) => {
            db.define(index, item, () => {
              resolve(index)
            })
          })

          $sync[id].push(r)
        }
      } catch (err) {
        continue
      }
    }

    localStorage.setItem('sync', JSON.stringify($sync))

    rt = keys.length === $sync[id].length
    return rt
  },

  /**
   * [drop 删表]
   * @return {[]} []
   */
  drop: async () => {
    const db = _database()
    for (let index of Object.keys(websql.tables)) {
      await db.drop(index)
    }

    localStorage.removeItem('sync')
  },

  /**
   * [insert 添加]
   * @return {[]} []
   */
  insert: async () => {},

  /**
   * [del 删除]
   * @param {[String]} name      [表名]
   * @param {[String]} condition [条件]
   * @return {[Boolean]} [结果返回值]
   */
  del: async (name, condition) => {
    // 数据是否存在
    let rt = await _get(name, condition)
    if (!rt) {
      return rt
    } else {
      if (!rt.length) return true
    }

    const db = _database()
    const tb = db.instance(name)

    try {
      await new Promise((resolve) => {
        tb.del(condition, (row) => {
          resolve(row)
        })
      })

      return true
    } catch (err) {
      return false
    }
  },

  /**
   * [save 更新]
   * @param {[String]} name  [表名]
   * @param {[Object]} data  [数据]
   * @param {[String]} field [字段]
   * @return {[Boolean]} [结果返回值]
   */
  save: async (name, data, field) => {
    const db = _database()
    const tb = db.instance(name)

    try {
      await new Promise((resolve) => {
        tb.save(data, field, (row) => {
          resolve(row)
        })
      })

      return true
    } catch (err) {
      return false
    }
  },

  /**
   * [get 查询]
   * @param {[String]} name      [表名]
   * @param {[String]} condition [条件]
   * @return {[Array]} [查询结果]
   */
  get: async (name, condition) => {
    const db = _database()
    const tb = db.instance(name)

    try {
      const rt = await new Promise((resolve) => {
        tb.get(condition, (row) => {
          resolve(row)
        })
      })

      return rt
    } catch (err) {
      return false
    }
  }
}

const _database = websql.database
const _define = websql.define
const _drop = websql.drop
const _insert = websql.insert
const _del = websql.del
const _save = websql.save
const _get = websql.get

export {
  _database,
  _define,
  _drop,
  _insert,
  _del,
  _save,
  _get
}
