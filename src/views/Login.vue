<template>
  <div class="fialed">{{msg}}</div>
</template>

<script>
export default {
  data () {
    return {
      msg: '页面不存在'
    }
  }
}
</script>

<style scoped>
.fialed{height:100%;display:flex;justify-content:center;flex-direction:column;color:#777;font-size:20px;text-align:center;}
</style>
