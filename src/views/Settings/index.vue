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
 * 弹框
 */
.slide-fade-enter-active {transition:all .5s ease;}
.slide-fade-leave-active {transition:all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
.slide-fade-enter, .slide-fade-leave-to{transform:translateX(1920px);}
.settings_pop_up{position:absolute;top:10px;right:10px;background:white;height:97%;overflow:auto;}
.settings_back{width:80%;margin:0 auto; margin-top:40px;padding-bottom:20px;border-bottom:1px solid #d0d0d0;}
.settings_choose .el-radio-group{display:block;}
.settings_choose .el-radio{display:block;}
.settings_choose .el-radio+.el-radio{margin-left:0;margin-top:20px;}
.settings_choose .el-radio__input{float:right;}

/**
 * 标题
 */
.el-row{width:80%;margin:0 auto;padding:10px 0;}

/**
 * 常规设置
 */
.setting_base_one{margin-top:40px;}
.settings_ip_address{border:1px solid #dcdfe6;padding:10px 0 10px 10px;}
.settings_text{width:100%;}

/**
 * 配置普通打印机
 */
.settings_common_printer{border-bottom:1px solid #d0d0d0;padding:40px 0 20px;}
.settings_common_printer div{line-height:40px;}
.el-icon-arrow-right{margin-top:4px;}

 /**
 * 后厨分类打印
 */
.settings_cook_type_choose{margin-top:20px;}
.settings_cook_type_choose .el-radio{display:block;}
.settings_cook_type_choose .el-radio+.el-radio{margin-left:0;margin-top:20px;}

 /**
 * 门店选择
 */
.settings_shop .el-radio-group{display:block;}
.settings_shop .el-radio{display:block;}
.settings_shop .el-radio+.el-radio{margin-left:0;margin-top:20px;}
.settings_shop .el-radio__input{float:right;}
</style>
