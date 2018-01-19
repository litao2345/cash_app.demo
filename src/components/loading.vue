<template>
  <div class="loading">
    <div class="step">{{steps.name}}</div>
    <el-progress :percentage="steps.percent"></el-progress>
  </div>
</template>

<script>
import {online} from '@/lib/sync'

import {mapGetters} from 'vuex'

export default {
  components: {
  },
  props: [
  ],
  data () {
    return {
      /**
       * 同步进度
       */
      steps: {
        percent: 0,
        name: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'init',
      'requests',
      'uploads'
    ])
  },
  methods: {
  },
  created () {
    online(this.requests, this.steps, this)
  },
  mounted () {
  }
}
</script>

<style scoped>
/**
 * 加载
 */
.loading{width:1054px;margin:-170px 0 0 -502px;position:absolute;top:50%;left:50%;}
.loading:before{width:413px;height:153px;margin:0 auto 170px;display:block;background:url('../assets/logoX.png');content:"";}

/**
 * 当前进度
 */
.step{position:absolute;bottom:37px;left:540px;color:#fff;font-size:13px;}
</style>

<style>
/**
 * 重置
 */
.loading .el-progress-bar{padding:0;}
.loading .el-progress-bar__outer{height:10px !important;border:2px solid #BAB6B4;}
.loading .el-progress-bar__inner{height:10px;
  transition:all .2s ease;}
.loading .el-progress__text{margin:0;position:absolute;top:-35px;left:380px;color:#fff;text-align:right;}
.loading .el-progress__text:before{content:"当前同步进度：";}
</style>
