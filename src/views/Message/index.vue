<template>
  <div class="inline message">
    <div class="nav">
      <div class="lnk"
        v-if="item.name === '消息中心'"
        v-for="item of $router.options.routes[0]['children']">
        <router-link :key="ix" :to="{path: it.path}"
          v-for="(it, ix) of item.children">{{it.name}}</router-link>
      </div>
    </div>
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'count',
      'message'
    ])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ])
  }
}
</script>

<style scoped>
/**
 * 重置
 */
.nav{width:120px;margin:0;padding:0;background:none;}

/**
 * 导航
 */
.nav a{height:51px;margin-bottom:1px;display:block;background:#A5C8E9;font-size:15px;line-height:50px;text-align:center;cursor:pointer;
  transition:all .2s ease;color:#fff;}
.nav a.router-link-active{background-color:#62A8EA;}
</style>

<style>
/**
 * 重置
 */
.user .title div{display:inline-block;}
.user .title .el-button{float:right;}

/**
 * 消息中心
 */
.user .dot_c{padding-left:25px;background-image:url(../../assets/complete_dot.png);background-size:20px;background-repeat:no-repeat;background-position:0 50%;}
.user .dot_g{padding-left:25px;background-image:url(../../assets/green_dot.png);background-size:20px;background-repeat:no-repeat;background-position:0 50%;}
.user .dot_p{padding-left:25px;background-image:url(../../assets/pink_dot.png);background-size:20px;background-repeat:no-repeat;background-position:0 50%;}

.user .title div{margin-left:15px}
.user .title div:first-child{margin-left:0}

.user .content{padding-top:20px;}
.user .content .el-col-8{text-align:right;}


</style>
