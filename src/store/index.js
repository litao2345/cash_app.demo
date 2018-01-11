import Vue from 'vue'
import Vuex from 'vuex'

import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  Count: 10,

  /**
   * [Userinfo 用户信息]
   */
  Userinfo: {},

  /**
   * [Powers 权限]
   */
  Powers: [],

  /**
   * [Settings 配置]
   */
  Settings: {
    /**
     * 常规设置
     */
    shops_theme: null, // 收银主题 (value: 1点餐, 2水果, 3零售, 4中餐馆/酒店)
    base_set: [1, 1, 1], // 通用 (param: 1自动升级, 2自启动, 3最大化)
    close_action: 1, // 关闭主界面时 (value: 1隐藏不退出, 0退出)
    main_casher: 1, // 主网络收银机 (value: 1打开, 0关闭)
    kitchen_ip: '', // 后厨显示IP地址
    quick_notes: '', // 快捷备注

    /**
     * 配置普通打印机
     */
    basic_size: null, // 型号
    basic_width: 58, // 打印宽度
    basic_font: 12, // 字号
    basic_numbers: 1, // 打印份数

    /**
     * 配置后厨打印机
     */
    back_size: null, // 型号
    back_width: 58, // 打印宽度
    back_font: 12, // 字号
    back_numbers: 1, // 打印份数

    /**
     * 配置标签打印机
     */
    tips_size: null, // 型号

    /**
     * 配置发票打印机
     */
    record_numbers: 1, // 打印份数

    /**
     * 配置打印格式
     */
    print_mode: 1, // 打印模式 (value: 1点餐, 2水果, 3零售, 4中餐馆/酒店)
    print_format: '', // 打印格式

    /**
     * 后厨分类打印
     */
    category_type: 1, // 分类 (value: 1点餐, 2水果, 3零售, 4中餐馆/酒店)
    category_default: 1, // 是否指定打印机 (value: 1后厨打印, 2指定打印, 3不打印)
    category_size: null, // 型号
    category_width: 58, // 打印宽度

    /**
     * 其它设备
     */
    other_screen: null, // 顾客显示设备
    other_scales: null, // 电子秤
    other_reader: null, // 读卡器

    /**
     * 门店选择
     */
    shop_id: 0, // 门店ID
    shop_name: '', // 店名

    /**
     * 系统更新
     */
    system_now: '1.0.0', // 当前版本号
    system_new: '', // 最新版本号

    /**
     * 关于我们
     */
    us_brand: '开店火', // 品牌
    us_name: '安徽共进软件有限公司版权所有', // 公司
    us_url: 'http://www.kaidianhuo.com/', // 官网
    us_qr: '' // 二维码
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
