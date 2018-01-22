<template>
  <div class="loading">
    <div class="step">{{steps.name}}</div>
    <el-progress :percentage="steps.percent"></el-progress>
  </div>
</template>

<script>
import {_init, _online} from '@/lib/sync'

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
      'uploads',
      'inters'
    ])
  },
  methods: {
    /**
     * [Init_Sync 初始化]
     * @return {[]} []
     */
    async Init_Sync () {
      // 重组初始化列表
      let arr = []
      for (let item of this.init) {
        if (!item.db) arr.push(item)
      }

      // 初始化本地环境
      let r = await _init(arr, this.steps)
      if (!r) {
        this.steps.name = '初始化失败，请检查系统环境'
        return false
      }

      // 重组请求列表
      arr = []
      for (let item of this.requests) {
        if (item.db && item.sync) arr.push(item)
      }

      // 同步线上数据
      r = await _online(arr, this.$http, this.steps)
      if (!r) {
        this.steps.name = '同步失败，请检查网络环境'
        return false
      }

      this.steps.name = '正在为您载入界面，请稍后'

      // 载入界面
      setTimeout(() => {
        this.$router.push({path: '/settings'})
      }, 1500)
    }
  },
  created () {
    this.Init_Sync()
  },
  mounted () {
  }
}
</script>

<style scoped lang="sass">
/**
 * 加载
 */
.loading
  position: absolute
  top: 50%
  left: 50%
  width: 1054px
  margin: -170px 0 0 -502px
  &:before
    display: block
    width: 413px
    height: 153px
    margin: 0 auto 170px
    content: ""
    background: url('../assets/logoX.png')

/**
 * 当前进度
 */
.step
  position: absolute
  bottom: 37px
  left: 540px
  font-size: 13px
  color: #fff
</style>

<style lang="sass">
/**
 * 重置
 */
.loading
  .el-progress-bar
    padding: 0
  .el-progress-bar__outer
    height: 10px !important
    border: 2px solid #BAB6B4
  .el-progress-bar__inner
    height: 10px
    transition: all .2s ease
  .el-progress__text
    position: absolute
    top: -35px
    left: 380px
    margin: 0
    color: #fff
    text-align: right
  .el-progress__text:before
    content: "当前同步进度："
</style>
