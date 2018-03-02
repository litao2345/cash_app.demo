import Vue from 'vue'
import Vuex from 'vuex'

import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  /**
   * [Sync 数据同步]
   */
  Sync: {
    // 初始化
    inits: [
      {name: '基础配置', init: 'init_base'},
      {name: '系统设置', db: 'cash_conf', init: 'init_conf'},
      {name: '交班状态', db: 'work_log', init: 'init_work'}
    ],

    // 请求
    requests: [
      {name: '店铺广告图', url: 'getShopAdv', db: 'adv_img', sync: 'sync_adv'},
      {name: '店铺活动信息', url: 'getDiscountProgram', db: 'activity', sync: 'sync_activity'},
      {name: '餐桌分类列表', url: 'getShopTableCate', db: 'desks_cate', sync: 'sync_desks_cate'},
      {name: '餐桌列表', url: 'getShopTables', db: 'desks', sync: 'sync_desks'},
      {name: '商品分类列表', url: 'getCashGoodsCate', db: 'goods_cate', sync: 'sync_goods_cate'},
      {name: '商品单位列表', url: 'getCashGoodsUnit', db: 'goods_unit', sync: 'sync_goods_unit'},
      {name: '商品列表', url: 'getCashGoods', db: 'goods', sync: 'sync_goods'},
      {name: '订单列表', url: 'get_shop_order', db: 'orders', sync: 'sync_orders'},

      {name: '积分兑换商品列表', url: 'getExchangeGoods', sync: 'sync_gift'}
    ],

    // 上传
    uploads: [
      {name: '订单列表', url: 'create_order', db: 'orders'},
      {name: '交班信息', url: 'set_cashier_log', db: 'work_log'}
    ],

    // 接口
    inters: [
      {name: '客户端信息环境', param: 'Client_Datas'}
    ],

    // 全局
    stores: [
      {name: '店铺广告图', fun: 'advSet', db: 'adv_img'},
      {name: '店铺活动信息', fun: 'actSet', db: 'activity'},
      {name: '餐桌分类列表', fun: 'deskscateSet', db: 'desks_cate'},
      {name: '餐桌列表', fun: 'desksSet', db: 'desks', where: 'desks'},
      {name: '商品分类列表', fun: 'goodscateSet', db: 'goods_cate'},
      {name: '商品单位列表', fun: 'goodsunitSet', db: 'goods_unit'},
      {name: '商品列表', fun: 'goodsSet', db: 'goods'},
      {name: '订单列表', fun: 'ordersSet', db: 'orders'}
    ]
  },

  /**
   * [Net 网络连接状态]
   */
  Net: 1, // 1已连接, 0已断开

  /**
   * [Adv 店铺广告图]
   */
  Adv: [],

  /**
   * [Act 店铺活动信息]
   */
  Act: {},

  /**
   * [Deskscate 餐桌分类列表]
   */
  Deskscate: [],

  /**
   * [Desks 餐桌列表]
   */
  Desks: [],

  /**
   * [Goodscate 商品分类列表]
   */
  Goodscate: [],

  /**
   * [Goodsunit 商品单位列表]
   */
  Goodsunit: [],

  /**
   * [Goods 商品列表]
   */
  Goods: [],

  /**
   * [Orders 订单列表]
   */
  Orders: [],

  /**
   * [Settings 配置]
   */
  Settings: {
    // 常规设置
    base: {
      theme: {
        name: '收银主题',
        type: 'checkbox',
        data: [
          {id: 1, name: '快餐模式', selected: 0},
          {id: 2, name: '中餐/酒店模式', selected: 1},
          {id: 3, name: '零售模式', selected: 0}
        ]
      },
      sets: {
        name: '通用',
        type: 'checkbox',
        data: [
          {id: 1, name: '有更新时自动升级', selected: 1},
          {id: 2, name: '开机时自动启动', selected: 1},
          {id: 3, name: '登录最大化窗口', selected: 1}
        ]
      },
      closed: {
        name: '关闭主界面时',
        type: 'radio',
        data: [
          {id: 1, name: '隐藏到任务栏通知区域，不退出程序', selected: 1},
          {id: 2, name: '退出程序', selected: 0}
        ]
      },
      casher: {
        name: '主网络收银机',
        type: 'radio',
        data: [
          {id: 1, name: '打开', selected: 1},
          {id: 2, name: '关闭', selected: 0}
        ]
      },
      remarks: {
        name: '快捷备注',
        type: 'text',
        data: ''
      }
    },

    // 配置普通打印机
    basic: {
      type: {
        name: '选择类型',
        type: 'radio',
        data: [
          {linkname: '0', showname: '不使用', selected: 1}
        ]
      },
      width: {
        name: '打印宽度',
        type: 'radio',
        data: [
          {linkname: '1', showname: '58', selected: 1},
          {linkname: '2', showname: '46', selected: 0},
          {linkname: '3', showname: '32', selected: 0}
        ]
      },
      font: {
        name: '字体大小',
        type: 'radio',
        data: [
          {linkname: '1', showname: '12', selected: 1},
          {linkname: '2', showname: '14', selected: 0},
          {linkname: '3', showname: '16', selected: 0},
          {linkname: '4', showname: '18', selected: 0},
          {linkname: '5', showname: '20', selected: 0}
        ]
      },
      number: {
        name: '打印份数',
        type: 'radio',
        data: [
          {linkname: '1', showname: '1', selected: 1},
          {linkname: '2', showname: '2', selected: 0},
          {linkname: '3', showname: '3', selected: 0},
          {linkname: '4', showname: '4', selected: 0},
          {linkname: '5', showname: '5', selected: 0}
        ]
      }
    },

    // 配置后厨打印机
    back: {
      ip: {
        name: '打印机地址IP',
        type: 'text',
        data: ''
      },
      width: {
        name: '打印宽度',
        type: 'radio',
        data: [
          {linkname: '1', showname: '58', selected: 1},
          {linkname: '2', showname: '46', selected: 0},
          {linkname: '3', showname: '32', selected: 0}
        ]
      },
      font: {
        name: '字体大小',
        type: 'radio',
        data: [
          {linkname: '1', showname: '12', selected: 1},
          {linkname: '2', showname: '14', selected: 0},
          {linkname: '3', showname: '16', selected: 0},
          {linkname: '4', showname: '18', selected: 0},
          {linkname: '5', showname: '20', selected: 0}
        ]
      },
      number: {
        name: '打印份数',
        type: 'radio',
        data: [
          {linkname: '1', showname: '1', selected: 1},
          {linkname: '2', showname: '2', selected: 0},
          {linkname: '3', showname: '3', selected: 0},
          {linkname: '4', showname: '4', selected: 0},
          {linkname: '5', showname: '5', selected: 0}
        ]
      }
    },

    // 配置标签打印机
    tips: {
      device: {
        name: '选择设备',
        type: 'radio',
        data: [
          {linkname: '0', showname: '不使用', selected: 1}
        ]
      },
      width: {
        name: '打印宽度',
        type: 'radio',
        data: [
          {linkname: '1', showname: '58', selected: 1},
          {linkname: '2', showname: '46', selected: 0},
          {linkname: '3', showname: '32', selected: 0}
        ]
      },
      font: {
        name: '字体大小',
        type: 'radio',
        data: [
          {linkname: '1', showname: '12', selected: 1},
          {linkname: '2', showname: '14', selected: 0},
          {linkname: '3', showname: '16', selected: 0},
          {linkname: '4', showname: '18', selected: 0},
          {linkname: '5', showname: '20', selected: 0}
        ]
      },
      number: {
        name: '打印份数',
        type: 'radio',
        data: [
          {linkname: '1', showname: '1', selected: 1},
          {linkname: '2', showname: '2', selected: 0},
          {linkname: '3', showname: '3', selected: 0},
          {linkname: '4', showname: '4', selected: 0},
          {linkname: '5', showname: '5', selected: 0}
        ]
      }
    },

    // 配置交班小票打印设置
    record: {
      numbers: {
        name: '打印份数',
        type: 'radio',
        data: [
          {linkname: '1', showname: '1', selected: 1},
          {linkname: '2', showname: '2', selected: 0},
          {linkname: '3', showname: '3', selected: 0},
          {linkname: '4', showname: '4', selected: 0},
          {linkname: '5', showname: '5', selected: 0}
        ]
      }
    },

    // 配置打印格式
    print: {
      mode: {
        name: '打印模式',
        type: 'radio',
        data: [
          {id: 1, name: '快餐', selected: 0},
          {id: 2, name: '中餐/酒店', selected: 1},
          {id: 3, name: '零售', selected: 0}
        ]
      },
      format: '' // 打印格式
    },

    // 后厨分类打印设置
    category: {
      type: {
        name: '分类',
        type: 'radio',
        data: [
          {id: 1, name: '炒菜', selected: 1},
          {id: 2, name: '茶水', selected: 0},
          {id: 3, name: '小吃', selected: 0}
        ]
      },
      default: 1, // 是否指定打印机 (value: 1后厨打印, 2指定打印, 3不打印)
      size: null, // 型号
      width: 58 // 打印宽度
    },

    // 其它设备
    other: {
      screen: {
        name: '选择顾客显示屏设备',
        type: 'radio',
        data: [
          {linkname: '0', showname: '不使用', selected: 1}
        ]
      },
      scales: {
        name: '选择电子称设备',
        type: 'radio',
        data: [
          {linkname: '0', showname: '不使用', selected: 1}
        ]
      },
      reader: {
        name: '选择读卡器设备',
        type: 'radio',
        data: [
          {linkname: '0', showname: '不使用', selected: 1}
        ]
      }
    },

    // 系统消息
    messages: {
    },

    // 关于我们
    us: {
      brand: '开店火', // 品牌
      version: '1.0.0', // 当前版本号
      news: '', // 最新版本号
      qr: '../../assets/qr.png', // 二维码
      company: '安徽共进软件有限公司', // 公司
      url: 'http://www.kaidianhuo.com/' // 官网
    },

    lastime: 20180125 // 更新时间
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
