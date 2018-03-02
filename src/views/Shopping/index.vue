<template>
  <div class="inline shopping">
    <div class="nav">
      <transition name="fade" mode="out-in">
        <iTEMDetails
          v-on:changed=""
          v-if=""></iTEMDetails>
      </transition>
    </div>
    <div class="main">
      <nav class="cate">
        <a class="active">全部</a>
        <a>大厅</a>
        <a>秋收厅</a>
        <a>新增分类</a>
      </nav>
      <div class="desk">
        <nav>
          <div class="deal">
            <el-button type="primary">刷新</el-button>
            <el-button type="primary">新增餐桌</el-button>
          </div>
          <div class="lnks">
            <a class="all active">全部</a>
            <a class="blank">空闲</a>
            <a class="open">已开台</a>
            <a class="opened">已下单</a>
          </div>
        </nav>
        <dl class="topic">
          <dt>大厅</dt>
          <dd>
            <div><a class="blank active">001号桌<br />4人桌</a></div>
            <div><a class="blank">002号桌<br />4人桌</a></div>
            <div><a class="open">003号桌<br />4人桌</a></div>
            <div><a class="opened">004号桌<br />4人桌</a></div>
          </dd>
          <dt>秋收厅</dt>
        </dl>
      </div>
    </div>

    <transition name="pop_up">
      <iTEMDiancan
        v-on:changed=""
        v-if=""></iTEMDiancan>
    </transition>
  </div>
</template>

<script>
import iTEMDetails from '../../components/details'
import iTEMDiancan from '../../components/diancan'

export default {
  components: {
    iTEMDetails,
    iTEMDiancan
  },
  props: [
  ],
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped lang="sass">
/**
 * 重置
 */
.nav
  padding: 0
  background: url('../../assets/bg.png')

.topic
  position: absolute
  top: 55px
  right: 50px
  bottom: 0
  left: 30px
  overflow-y: auto
  dd
    overflow: hidden
  div
    float: left
    width: 25%
    text-align: center
  a
    display: block
    width: 128px
    height: 48px
    padding: 25px 0
    line-height: 24px
    color: #000
    background-image: url('../../assets/shopping/desk1.png')
    &.open
      background-image: url('../../assets/shopping/desk2.png')
    &.opened
      background-image: url('../../assets/shopping/desk3.png')
    &.active
      background-image: url('../../assets/shopping/deskA.png')

/**
 * 餐桌分类
 */
.cate
  float: left
  width: 100px
  height: 100%
  background-color: #c8c8c8
  a
    display: block
    line-height: 54px
    color: #000
    text-align: center
    border-bottom: 1px solid #332f12
    &.active
      padding-right: 5px
      background-color: #fff
      border-left: 5px solid #fe0034

/**
 * 餐桌
 */
.desk
  position: relative
  overflow: hidden
  height: 100%
  padding: 0 50px 0 30px
  nav
    position: relative
    height: 54px
    border-bottom: 1px solid #b0adac

  .deal
    float: right
    padding: 10px 0 0
    border: none

  .lnks
    position: absolute
    bottom: -1px
    left: 0
    font-size: 15px
    line-height: 36px
    a
      &:before
        margin: 11px 10px 0 20px
</style>
