<template>
  <section id="app" class="app">
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

<style>
/**
 * 公共样式
 */
html,
body{height:100%;overflow:hidden;}
body{margin:0;background-color:#F2F2F2;}

::-webkit-scrollbar{width:0;height:0;}

li{list-style:none;}
a,
a:link,
a:hover,
a:active,
a:visited{color:#222;text-decoration:none;}

input,
textarea{outline:none;}
textarea{resize:none;}

/**
 * 其它
 */
.app{height:100%;overflow:hidden;}

.r{float:right;}

.blank{padding:20px 0;color:#777;font-size:15px;line-height:40px;text-align:center;}

/**
 * 淡入淡出动画
 */
.fade-enter-active,
.fade-leave-active{transition:all .2s ease;}

.fade-enter,
.fade-leave-active{opacity:0;}
</style>
