<template>
  <section class="app" id="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
/**
 * 公共样式
 */
html,
body
  overflow: hidden
  height: 100%
body
  margin: 0
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  color: #1d1d1d
  background: url('./assets/bg.jpg') #fff
    size: 100% 100%

::-webkit-scrollbar
  width: 0
  height: 0

*
  margin: 0
  padding: 0

li
  list-style: none

a,
a:link,
a:hover,
a:active,
a:visited
  color: #1d1d1d
  text-decoration: none
  cursor: pointer

h1,
h2,
h3,
h4,
strong,
b,
th
  font-weight: normal

em,
i
  font-style: normal

p
  margin: 0

input,
textarea
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  outline: none
textarea
  resize: none

/**
 * 淡入淡出动画
 */
.fade-enter-active,
.fade-leave-active
  transition: all .2s ease

.fade-enter,
.fade-leave-active
  opacity: 0

/**
 * 滑入滑出动画
 */
.pop_up-enter-active
  transition: all .5s ease

.pop_up-leave-active
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0)

.pop_up-enter,
.pop_up-leave-to
  transform: translateX(1920px)

/**
 * 重置
 */
// 输入框
@mixin txt
  font-size: 16px
  border-color: #c8c8c8
  &::-webkit-input-placeholder
    color: #8c8c8c

.el-input input
  @include txt
  height: 50px

.el-textarea textarea
  @include txt
  height: 146px
  padding: 12px 15px

// 选择框
@mixin chk
  label
    margin:
      left: 0 !important
      right: 60px
  span
    font-size: 16px
    line-height: 24px

    &.el-checkbox__input,
    &.el-radio__input
      float: left

    &.el-checkbox__inner,
    &.el-radio__inner
      display: block
      width: 24px
      height: 24px

    &.is-focus span
      border-color: #c8c8c8 !important

    &.is-checked span
      border-color: #fe0034 !important

.el-radio-group
  @include chk
  label
    display: block
    margin-top: 20px
    &:first-child
      margin: 0

  .el-radio__inner:after
    width: 10px
    height: 10px

.el-checkbox-group
  @include chk

  .el-checkbox__inner
    border-radius: 3px
    &:after
      top: 0
      left: 7px
      width: 5px
      height: 16px
      border: 3px solid #fff
        left: 0
        top: 0

/**
 * 布局
 */
.inline
  overflow: hidden
  height: 100%

  .nav
    float: left
    overflow-y: auto
    width: 340px
    height: 100%
    padding: 0 20px
    margin-right: 10px
    background-color: #fff

  .main
    position: relative
    box-sizing: border-box
    overflow:
      x: hidden
      y: auto
    height: 100%
    background-color: #fff

  .public
    padding: 0 60px

    .title
      padding: 40px 0 20px
      font:
        weight: bold
        size: 20px
      line-height: 40px
      border-bottom: 1px solid #e4e4e4

  .el-table
    text-align: center
    th
      color: #000
      text-align: center
      background-color: #ccc
      > .cell
        text-align: center

/**
 * 订单, 清单
 */
.detailed
  .head
    height: 40px
    font-weight: bold
    line-height: 20px
    text-align: center
    background: #e5e5e5
  .top
    padding: 0 20px
    .el-row:last-child
      padding-bottom: 10px
      border-bottom: 1px solid #ccc
      span
        padding-left: 25px
        background:
          position: 0 40%
          size: 30px
          repeat: no-repeat
        &.order_end
          background-image: url(assets/point_g.png)
        &.order_un
          background-image: url(assets/point_b.png)
        &.order_out
          background-image: url(assets/point_r.png)
  .content
    padding: 0 20px
    text-align: center
    .el-col-9
      text-align: left
    .menu
      .el-row:first-child
        color: #62a8ea
      .el-row:last-child
        padding-bottom: 10px
        border-bottom: 1px solid #ccc
  .footer
    position: fixed
    bottom: 10px
    width: 360px
    height: 160px
    text-align: center
    background: #e5e5e5
    .button
      padding-top: 60px
      margin: 50px 20px 0
      border-top: 1px solid #ccc

/**
 * 其它
 */
.app
  overflow: hidden
  height: 100%

.r
  float: right

/**
 * ProgresSive-Image控件
 */
.progressive
  position: relative
  overflow: hidden
  height: 100%
  img
    display: block
    width: 100%
    height: 100%
    border: none
    &.preview
      filter: blur(2vw)
      transform: scale(1.05)
    &.hide
      opacity: 0
    &.origin
      position: absolute
      top: 0
      left: 0
      animation: origin 1.5s ease-out
    &.origin-scale
      position: absolute
      left: 0
      top: 0
      animation: origin-scale 1s ease-out

@-webkit-keyframes origin
  0% 
    opacity: 0
  100% 
    opacity: 1

@-webkit-keyframes origin-scale
  0% 
    opacity: 0
    transform: scale(1.1)
  100% 
    opacity: 1
    transform: scale(1)
</style>
