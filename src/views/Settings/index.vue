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
.nav .lnk
  padding: 25px 0
  a
    display: block
    padding: 0 12px
    font-size: 17px
    line-height: 59px
    text-align: left
    cursor: pointer
    border-bottom: 1px solid #eaeaea
    transition: all .2s ease
    &.router-link-active
      color: #fe0034
      background-color: #eaeaea
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
        .el-checkbox__label, .el-radio__label
          font-size: 17px
        .el-checkbox__inner, .el-radio__inner
          width: 25px
          height: 25px
        .el-checkbox__inner::after
          left: 7px
          top: -2px
          width: 6px
          height: 20px
          border: 3px solid #fff
          border-left: 0
          border-top: 0
        .el-radio__inner::after
          width: 10px
          height: 10px
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
      .choose
        .type
          margin-top: 40px
        .el-row
          border-bottom: 1px solid #efefef
          padding-bottom: 20px
          .el-col-4
            text-align: right
  /**
   * 门店选择
   */
  .shop 
    .el-radio__input
      float: right

  /**
   * 后厨分类打印
   */
  .category
    .IP
      padding: 20px 0 0
      border-top: 1px solid #d0d0d0
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
</style>
