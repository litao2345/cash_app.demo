<template>
  <el-container class="app"
    v-loading="lod">
    <el-aside class="aside" width="125px">
      <div class="lnk">
        <router-link :key="index" :to="item.path"
          v-if="!item.hidden"
          v-for="(item, index) of $router.options.routes[0]['children']">{{item.name}}</router-link>
      </div>
      <div :class="'wifi' + (this.net ? '' : ' failed')">
        <time>{{time}}</time>
      </div>
    </el-aside>
    <el-main class="container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </el-main>
  </el-container>
</template>

<script>
import {_interline, _storeline} from '@/lib/sync'

import {mapGetters, mapActions} from 'vuex'

export default {
  components: {
  },
  props: [
  ],
  data () {
    return {
      /**
       * 基础信息
       */
      failed: false,
      time: '2018/01/01 18:00',

      /**
       * 其它
       */
      lod: true // 加载动画
    }
  },
  computed: {
    ...mapGetters([
      'inters',
      'stores',
      'net'
    ])
  },
  methods: {
    ...mapActions([
      'netSet',
      'advSet',
      'actSet',
      'deskscateSet',
      'desksSet',
      'goodscateSet',
      'goodsunitSet',
      'goodsSet',
      'ordersSet'
    ]),

    /**
     * [Init_Working 初始化工作数据]
     * @return {[]} []
     */
    async Init_Working () {
      // 客户端是否存在
      if (window.kdh.ClientBridge) {
        // 重置检测网络状态方法
        window.api.prototype.NetworkCheck = (datas) => {
          this.netSet(datas.state)
        }
        delete window.kdh.Net_Status

        // 配置接口数据
        await _interline(this.inters[0])
      }

      // 重组全局列表
      let arr = []
      for (let item of this.stores) {
        if (typeof item.fun === 'string') item.fun = this[item.fun]
        arr.push(item)
      }

      // 配置全局数据
      await _storeline(arr)

      // 创建交班记录

      this.lod = false // 完成全部配置
    },

    // 创建交班记录
    start_working () {
      // var start_data = {
      //     uid: get_member_uid(),
      //     start_time: parseInt(new Date().getTime() / 1000),
      //     state: 0,
      //     total_money: 0,
      //     cash_money: 0,
      //     wechat_money: 0,
      //     ali_money: 0,
      //     bankcard_money: 0,
      //     change_money: 0,
      //     orders_cnt: 0,
      //     put_orders_cnt: 0,
      //     bak_orders_cnt: 0,
      //     return_money: 0,
      //     sync: 0
      // }

      // var shop_type = 'default'
      // if (typeof(client) !== 'undefined') {
      //   var shop = getShopInfo(get_shop_id())

      //   switch(parseInt(shop.type)){
      //     case 1:
      //       shop_type = 'default'
      //       break
      //     case 2:
      //       shop_type = 'fruit'
      //       break
      //     case 3:
      //       shop_type = 'shopList'
      //       break
      //     case 4:
      //       shop_type = 'tea_milk'
      //       break
      //     case 5:
      //       shop_type = 'chineseRestaurant'
      //       break
      //   }
      // } else {
      //   $("#default").show()
      //   $("#fruit").show()
      //   $("#shopList").show()
      // }

      // var where = 'uid=' + get_member_uid() + ' AND state=0'
      // db.get('work_log', where, function (r) {
      //   if (!r.length) {
      //       // 创建新的上班记录
      //       db.insert('work_log', start_data)
      //       setTimeout(function (){
      //           location.href = '#'+shop_type
      //       }, 700)
      //   } else {
      //       var user_info = get_user_info(r[0].uid)
      //       dialog({
      //         title: '异常提示',
      //         content: "营业员：" + user_info.user_name + ", 尚未交班",
      //         okValue: '立即交班',
      //         ok: function () {
      //             core.end_work(r[0].uid, function (post_data) {
      //               delete post_data['goods_print_list']
      //               var ajax_data = core.clone(post_data)
      //               delete ajax_data['goods_print_list']
      //               if (check_network()) {
      //                 core.ajax('set_cashier_log', ajax_data, 'GET', function (rt) {
      //                   post_data.sync = 1
      //                 }, false, function(){
      //                   db.update('work_log', post_data, 'id')
      //                 }, true)
      //               } else {
      //                 db.update('work_log', post_data, 'id')
      //               }

      //               db.insert('work_log', start_data)
      //               location.href = '#'+shop_type
      //             })
      //             return true
      //         },
      //         cancelValue: '继续营业',
      //         cancel: function () {
      //           location.href = '#'+shop_type
      //           return true
      //         }
      //     }).showModal()
      //   }
      // })

      // $("#nav_left").show()
    }
  },
  created () {
    this.Init_Working()
  },
  mounted () {
  }
}
</script>

<style scoped lang="sass">
/**
 * 导航区
 */
.aside
  position: relative
  background: url('../assets/bg.png')

  // 链接
  .lnk
    position: absolute
    top: 0
    right: 0
    bottom: 90px
    left: 0
    overflow-y: auto
    font-size: 15px
    line-height: 64px
    a
      display: block
      height: 64px
      color: #fff
      cursor: pointer
      &:before
        float: left
        width: 46px
        height: 100%
        content: ""
        background: 50% no-repeat
      &.router-link-active
        background-color: #fe0034

      $arr: (1, 2, 3, 4, 5, 6, 7)
      @each $v in $arr
        &:nth-child(#{$v}):before
          background-image: url('../assets/icon/nav#{$v}.png')

  // WIFI
  .wifi
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 90px
    font-size: 14px
    font-family: Arial
    line-height: 18px
    color: #fff
    text-align: center
    background-color: #5c5c5c
    &:before
      display: block
      width: 29px
      height: 22px
      margin: 15px auto 8px
      content: ""
      background: url('../assets/icon/wifi.png') 50% no-repeat
    &.failed:before
      background-image: url('../assets/icon/wifiX.png')
    time
      display: block
      margin: 0 20px

/**
 * 容器区
 */
.container
  padding: 10px
  height: 100%

  -moz-osx-font-smoothing: grayscale
   -webkit-font-smoothing: antialiased
</style>
