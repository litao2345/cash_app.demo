<template>
  <div class="inline settings">
    <div class="nav">
      <div class="lnk"
        v-if="item.name === '系统设置'"
        v-for="item of $router.options.routes[0]['children']">
        <router-link :key="ix" :to="{path: it.path}"
          v-for="(it, ix) of item.children">{{it.name}}</router-link>
      </div>
      <div>
        Clicked: {{count}} times
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
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
  components: {
  },
  props: [
  ],
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'count',
      'settings'
    ])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ])
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped>
/**
 * 重置
 */
.main{padding:30px 60px;box-sizing:border-box;}

.el-tabs{height:100%;}
.el-tab-pane{height:100%;overflow-y:auto;margin-top:40px;}

/**
 * 导航
 */
.nav a{height:61px;padding:0 10px;display:block;font-size:18px;line-height:60px;text-align:left;cursor:pointer;
  transition:all .2s ease;}
.nav a:after{width:300px;height:1px;margin-left:-10px;display:block;background-color:#DFE2E4;content:"";}
.nav a.router-link-active{width:360px;margin-left:-30px;padding:0 40px;background-color:#F9FCFE;color:#62A8EA;}

.nav .lnk{padding:30px 0;}
</style>

<style>
/**
 * 重置
 */
.settings .el-radio-group{display:block;}
.settings .el-radio{display:block;}
.settings .el-radio+.el-radio{margin-left:0;margin-top:20px;}

.settings .el-row{padding:20px 0;}
.settings .el-row:first-child{border-bottom:1px solid #d0d0d0;line-height:40px;}

.settings .el-icon-arrow-right{margin-top:4px;}

.settings .pup_up .el-radio__input{float:right;}

.settings .radio .el-radio-group{display:inline-block;}
.settings .radio .el-radio{display:inline-block;}
.settings .radio .el-radio__input{display:none;}

/**
 * 常规设置
 */
.settings .base .ip{border:1px solid #dcdfe6;padding:10px;margin:0;}
.settings .base .text{width:100%;padding:5px 10px;box-sizing:border-box;}

/**
 * 门店选择
 */
.settings .shop .el-radio__input{float:right;}
</style>
