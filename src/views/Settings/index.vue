<template>
  <div class="inline settings">
    <div class="nav">
      <div class="lnk"
        v-if="item.name === '系统设置'"
        v-for="item of $router.options.routes[0]['children']">
        <router-link :key="ix" :to="{path: it.path}"
          v-if="!it.hidden"
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
.main
  padding: 12px 50px 40px

/**
 * 链接
 */
.lnk
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
 * 系统设置
 */
.settings

  // 操作
  .deal
    overflow: hidden
    height: 38px
    padding-bottom: 6px
    border-bottom: 1px solid #b0adac
    button
      float: right
      padding: 11px 25px
      margin-left: 10px
      &.l
        float: left
        margin: 0

  // 主题
  .topic
    padding-top: 20px
    dt
      padding:
        top: 2px
        left: 13px
      font-weight: bold
      line-height: 18px
      border-left: 5px solid #fe0034
    dd
      padding: 30px 18px 40px
      &:last-child
        padding-bottom: 0

  // 列表
  .list,
  .selected
    line-height: 60px
    li
      padding: 0 10px
      cursor: pointer
      border-bottom: 1px solid #eaeaea
      &.ip
        padding: 20px 0 0
        border-bottom: none
        div:first-child
          float: left
          width: 120px
          line-height: 50px

        .boxs
          margin-left: 120px

        .detail
          display: inline-block
          width: 100%
          padding-left: 15px
          border: 1px solid #d0d0d0
          box-sizing: border-box
          line-height: 50px

  .list i
    float: right
    color: #9b9b9b
    &:first-child
      margin:
        top: 18px
        left: 15px
      font-size: 24px
      color: #c9c9c9

  // 选择
  .selected
    li.active:before
      float: right
      width: 31px
      height: 27px
      margin: 16px 20px 0 0
      content: ""
      background-image: url('../../assets/icon/selected.png')

  .radio

    .el-radio-group,
    .el-radio
      display: inline-block

    .el-radio__input
      display: none

  // 分类打印
  .category

    .title
      padding-left: 10px
      margin-top: 20px
      font-weight: bold
      border-left: 4px solid #fe0034

    .radio
      margin-top: 20px

      .el-radio__label
        padding: 0
        font-size: 17px

      .el-radio
        width: 120px
        height: 46px
        padding: 0
        line-height: 46px
        color: #fe0034
        text-align: center
        border:
          color: #fe0034
          radius: 0
        &.is-checked
          background-color: #fe0034
          span
            color: #fff

    .hot
      margin: 25px 0
      font-size: 15px
      color: #ff0033

  // 打印模式
  .mode
    p
      line-height: 40px
      color: #999
    textarea
      width: 370px
      height: 520px
</style>
