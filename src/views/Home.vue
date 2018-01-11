<template>
  <el-container class="app">
    <!-- 导航区 -->
    <el-aside class="navigator" width="88px">
      <div class="lnk">
        <router-link :key="index" :to="item.path" :class="item.class"
          v-if="!item.hidden"
          v-for="(item, index) of $router.options.routes[0]['children']">{{item.name}}</router-link>
      </div>
    </el-aside>

    <!-- 容器区 -->
    <el-main class="container">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </el-main>
  </el-container>
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
  methods: {
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped>
/**
 * 导航区
 */
.navigator{background-color:#575656;position:relative;}
.navigator .lnk{overflow-y:auto;position:absolute;top:0;right:0;bottom:88px;left:0;font-size:15px;line-height:78px;text-align:center;}
.navigator .lnk a{height:78px;display:block;border-bottom:1px solid #6A6969;color:#fff;cursor:pointer;}
.navigator .lnk a.router-link-active{background-color:#62A8EA;}
.navigator .lnk a.jiao{width:88px;border:none;background-color:#34B977;position:fixed;bottom:0;left:0;}

/**
 * 容器区
 */
.container{padding:10px;color:#222;font-family:'Avenir',Helvetica,Arial,sans-serif;
  -webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
</style>
