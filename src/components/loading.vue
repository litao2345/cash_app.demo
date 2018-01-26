<template>
  <div class="loading">
    <div class="step">{{steps.name}}</div>
    <el-progress :percentage="steps.percent"></el-progress>
  </div>
</template>

<script>
import {_baseline, _online} from '@/lib/sync'
import {_save, _get} from '@/lib/websql'

import {mapGetters} from 'vuex'

export default {
  components: {
  },
  props: [
  ],
  data () {
    return {
      // 同步进度
      steps: {
        name: '',
        percent: 0
      }
    }
  },
  computed: {
    ...mapGetters([
      'inits',
      'requests'
    ])
  },
  methods: {
    /**
     * [Init_Sync 初始化]
     * @return {[]} []
     */
    async Init_Sync () {
      // 是否首次同步数据
      const fst = await this.Is_Fstime()

      // 重组初始化列表
      let arr = []
      for (let item of this.inits) {
        if (!item.db) arr.push(item)
      }

      // 初始化本地环境
      let r = await _baseline(arr, this.steps)
      if (!r) {
        if (fst) this.steps.name = '初始化失败，请检查系统环境'
        else this.Load_Interface('初始化异常，正在为您切换无网模式')
        return
      }

      // 重组请求列表
      arr = []
      for (let item of this.requests) {
        if (item.db) arr.push(item)
      }

      // 同步线上数据
      r = await _online(arr, this.$http, this.steps)
      if (!r) {
        if (fst) this.steps.name = '同步失败，请检查网络环境'
        else this.Load_Interface('网络异常，正在为您切换无网模式')
        return
      }

      // 首次成功同步数据
      if (fst) {
        const snd = await this.Ok_Fstime()
        if (!snd) return
      }

      this.Load_Interface('正在为您载入界面，请稍后')
    },

    /**
     * [Is_Fstime 是否首次同步数据]
     * @return {[Boolean]} [结果返回值]
     */
    async Is_Fstime () {
      const r = await _get('cash_conf', ('name="fsttime"')) // 查询
      if (!r) {
        return true
      } else {
        if (r.length) return false
        else return true
      }
    },

    /**
     * [Ok_Fstime 首次成功同步数据]
     * @return {[Boolean]} [结果返回值]
     */
    async Ok_Fstime () {
      const data = {
        'name': 'fsttime',
        'val': parseInt(new Date().getTime() / 1000)
      }
      const r = await _save('cash_conf', data, 'name') // 更新
      return r
    },

    /**
     * [Load_Interface 载入界面]
     * @param {[String]} welcome [载入等待词]
     * @return {[]} []
     */
    Load_Interface (welcome) {
      this.steps.name = welcome

      // 载入界面
      setTimeout(() => {
        this.$router.push({path: '/settings'})
      }, 2000)
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

  // 当前进度
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
.login .loading

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
