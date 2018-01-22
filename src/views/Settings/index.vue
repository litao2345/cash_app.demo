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
  padding: 30px 60px
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
    color: #62a8ea
    background-color: #f9fcfe

  .lnk
    padding: 30px 0
</style>

<style lang="sass">
/**
 * 重置
 */
.settings
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
      padding-bottom: 20px
      border-bottom: 1px solid #d0d0d0
      line-height: 40px
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

  /**
   * 常规设置
   */
  .base 
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
