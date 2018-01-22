<template>
  <el-container class="app"
    v-loading="lod">
    <el-aside class="aside" width="88px">
      <div class="lnk">
        <router-link :key="index" :to="item.path"
          v-if="!item.hidden"
          v-for="(item, index) of $router.options.routes[0]['children']">{{item.name}}</router-link>
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
       * 其它
       */
      lod: true // 加载动画
    }
  },
  computed: {
    ...mapGetters([
      'inserts',
      'stores'
    ])
  },
  methods: {
    ...mapActions([
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
     * [Init_Store 初始化Store全局数据配置]
     * @return {[]} []
     */
    async Init_Store () {
      // 重组接口列表
      let arr = []

      // 配置接口数据
      const inter = await _interline()
      if (!inter) {}

      // 重组全局列表
      arr = []
      for (let item of this.stores) {
        if (typeof item.fun === 'string') item.fun = this[item.fun]
        arr.push(item)
      }

      // 配置全局数据
      await _storeline(arr)

      this.lod = false // 完成全部配置
    }
  },
  created () {
    this.Init_Store()
  },
  mounted () {
  }
}
</script>

<style scoped>
/**
 * 导航区
 */
.aside{background-color:#575656;position:relative;}
.aside .lnk{overflow-y:auto;position:absolute;top:0;right:0;bottom:88px;left:0;font-size:15px;line-height:78px;text-align:center;}
.aside .lnk a{height:78px;display:block;border-bottom:1px solid #6A6969;color:#fff;cursor:pointer;}
.aside .lnk a.router-link-active{background-color:#62A8EA;}
.aside .lnk a.jiao{width:88px;border:none;background-color:#34B977;position:fixed;bottom:0;left:0;}

/**
 * 容器区
 */
.container{padding:10px;color:#222;font-family:'Avenir',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
</style>
