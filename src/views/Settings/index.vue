<template>
  <div class="inline settings">
    <div class="nav">
      <div class="lnk"
        v-if="item.name === '系统设置'"
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
    ])
  },
  methods: {
    ...mapActions([
    ])
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
.main
  padding: 15px 50px
  box-sizing: border-box
.el-tabs
  height: 100%
.el-tab-pane
  overflow-y: auto
  height: 100%
  margin-top: 40px

/**
 * 导航
 */
.nav
  a
    display: block
    height: 61px
    padding: 0 10px
    font-size: 18px
    line-height: 60px
    text-align: left
    cursor: pointer
    transition: all .2s ease
    &:after
      display: block
      width: 300px
      height: 1px
      margin-left: -10px
      background-color: #dfe2e4
      content: ""
  .router-link-active
    width: 360px
    padding: 0 40px
    margin-left: -30px
    color: #fe0034
    background-color: #eaeaea

  .lnk
    padding: 30px 0
</style>

<style lang="sass">
/**
 * 重置
 */
.settings
  .btn 
    padding-bottom: 5px
    overflow: hidden
    border-bottom: 1px solid #d0d0d0
    button
      float: right
      margin-left: 15px
  .choose
    margin-top: 40px
    .el-row
      border-bottom: 1px solid #efefef
      padding-bottom: 20px
      .el-col-4
        text-align: right
  .el-radio-group
    display: block
  .el-radio
    display: block
  .el-radio+.el-radio
    margin-top: 20px
    margin-left: 0

  .el-row
    margin-top: 20px
    cursor: pointer
    &:first-child
      padding-top: 20px
      cursor: auto
  .el-icon-arrow-right
    margin-top: 4px
  .pup_up 
    .el-radio__input
      float: right
  .radio
    .el-radio-group, .el-radio
      display: inline-block
    .el-radio__input
      display: none
  .IP
    padding: 20px 0 0
    border-bottom: none
    div
      &:first-child
        float: left
        width: 120px
        line-height: 50px
    .boxs
      margin-left: 121px
    .detail
      display: inline-block
      width: 100%
      padding-left: 15px
      border: 1px solid #d0d0d0
      box-sizing: border-box
      line-height: 50px
  /**
   * 常规设置
   */
  .base
    .el-row
      .el-col-23
        padding-left: 10px
        margin-top: 20px
        font-weight: bold
        border-left: 4px solid #fe0034
      .el-col-24
        padding-left: 15px
        margin-top: 10px
        font-size: 18px
    .ip
      padding: 10px
      margin: 0
      border: 1px solid #dcdfe6
    .text
      width: 100%
      padding: 5px 10px
      border: 1px solid  #dcdfe6
      box-sizing: border-box

  /**
   * 配置普通打印机
   */
  .basic
    .content
      padding-left: 10px
  /**
   * 门店选择
   */
  .shop 
    .btn
      button
        float: left
        margin-left: 0
    .el-radio__input
      float: right

  /**
   * 后厨分类打印
   */
  .category
    .title
      padding-left: 10px
      margin-top: 20px
      font-weight: bold
      border-left: 4px solid #fe0034
    .radio
      margin-top: 30px
      .el-radio__label
        padding: 0
        font-size: 18px
      .el-radio
        width: 120px
        height: 50px
        padding: 0
        margin-top: 0
        text-align: center
        line-height: 50px
    .hint
      margin-top: 25px
      font-size: 15px
      color: #ff0033
    .IP
      padding: 60px 0 0
      border-bottom: none
      div
        &:first-child
          float: left
          width: 120px 
      .boxs
        margin-left: 121px
      .detail
        display: inline-block
        width: 100%
        padding-left: 15px
        border: 1px solid #d0d0d0
        box-sizing: border-box
    .print
      margin-top: 40px
      &.el-row
        border-bottom: 1px solid #efefef
        padding-bottom: 20px
        .el-col-4
          text-align: right
  /**
   * 其他设备
   */ 
  .other
    .choose
      padding-left: 10px
      .type
        margin-top: 40px
      .el-row
        border-bottom: 1px solid #efefef
        padding-bottom: 20px
        .el-col-4
          text-align: right
  /**
   * 关于我们
   */ 
  .us
    div
      margin-top: 20px
      a
        color: #01a9f0
    .title
      background-image: url(../../assets/login/fire.png)
      padding: 5px 0 5px 25px
      background:
        position: 0 40%
        size: 20px
        repeat: no-repeat

</style>
