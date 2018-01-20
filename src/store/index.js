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
    /**
     * 初始化
     */
    init: [
      {name: '基础配置'},
      {name: '系统设置', db: 'cash_conf'}
    ],
    /**
     * 请求
     */
    requests: [
      {name: '店铺广告图', url: 'getShopAdv', db: 'adv_img', sync: 'sync_adv'},
      {name: '店铺活动信息', url: 'getDiscountProgram', db: '', sync: 'sync_activity'},
      {name: '积分兑换商品列表', url: 'getExchangeGoods', db: '', sync: 'sync_gift'},
      {name: '餐桌分类列表', url: 'getShopTableCate', chinese_restaurant: true},
      {name: '餐桌列表', url: 'getShopTables', chinese_restaurant: true},
      {name: '商品分类列表', url: 'getCashGoodsCate', db: 'goods_cate', sync: 'sync_goods_cate'},
      {name: '商品单位列表', url: 'getCashGoodsUnit', db: 'goods_unit', sync: 'sync_goods_unit'},
      {name: '商品列表', url: 'getCashGoods', db: 'goods', sync: 'sync_goods'},
      {name: '订单列表', url: 'get_shop_order', db: 'orders', sync: 'sync_orders'}
    ],
    /**
     * 上传
     */
    uploads: [
      {name: '订单列表', url: 'create_order'},
      {name: '交班信息', url: 'set_cashier_log'}
    ]
  },

  /**
   * [Userinfo 用户信息]
   */
  Userinfo: {},

  /**
   * [Shops 店铺列表]
   */
  Shops: [],

  /**
   * [Powers 权限]
   */
  Powers: [],

  /**
   * [Activity 活动信息]
   */
  Activity: [],

  /**
   * [Settings 配置]
   */
  Settings: {
    /**
     * 常规设置
     */
    base: {
      theme: null, // 收银主题 (value: 1点餐, 2水果, 3零售, 4中餐馆/酒店)
      sets: [1, 1, 1], // 通用 (param: 1自动升级, 2自启动, 3最大化)
      closed: 1, // 关闭主界面时 (value: 1隐藏不退出, 0退出)
      casher: 1, // 主网络收银机 (value: 1打开, 0关闭)
      ip: '', // 后厨显示IP地址
      remarks: '' // 快捷备注
    },

    /**
     * 配置普通打印机
     */
    basic: {
      size: null, // 型号
      width: 58, // 打印宽度
      font: 12, // 字号
      numbers: 1 // 打印份数
    },

    /**
     * 配置后厨打印机
     */
    back: {
      size: null, // 型号
      width: 58, // 打印宽度
      font: 12, // 字号
      numbers: 1 // 打印份数
    },

    /**
     * 配置标签打印机
     */
    tips: {
      size: null // 型号
    },

    /**
     * 配置发票打印机
     */
    record: {
      numbers: 1 // 打印份数
    },

    /**
     * 配置打印格式
     */
    print: {
      mode: 1, // 打印模式 (value: 1点餐, 2水果, 3零售, 4中餐馆/酒店)
      format: '' // 打印格式
    },

    /**
     * 后厨分类打印
     */
    category: {
      type: 1, // 分类 (value: 1点餐, 2水果, 3零售, 4中餐馆/酒店)
      default: 1, // 是否指定打印机 (value: 1后厨打印, 2指定打印, 3不打印)
      size: null, // 型号
      width: 58 // 打印宽度
    },

    /**
     * 其它设备
     */
    other: {
      screen: null, // 顾客显示设备
      scales: null, // 电子秤
      reader: null // 读卡器
    },

    /**
     * 门店选择
     */
    shop: {
      id: 0, // 门店ID
      name: '' // 店名
    },

    /**
     * 系统更新
     */
    system: {
      now: '1.0.0', // 当前版本号
      new: '' // 最新版本号
    },

    /**
     * 关于我们
     */
    us: {
      brand: '开店火', // 品牌
      name: '安徽共进软件有限公司版权所有', // 公司
      url: 'http://www.kaidianhuo.com/', // 官网
      qr: '' // 二维码
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
