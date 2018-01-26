<template>
  <div class="us">
    <div class="deal"></div>
    <div class="logo">{{us.brand}} {{us.version}}</div>
    <img src="../../assets/qr.png" />
    <p>{{us.company}} &copy; 版权所有</p>
    <a>{{us.url}}</a>
    <el-button type="primary"
      @click="Get_Versions">获取最新版本</el-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

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
      'us'
    ])
  },
  methods: {
    /**
     * [Get_Versions 获取最新版本]
     * @return {[]} []
     */
    Get_Versions () {
      this.$message({
        type: 'success',
        message: '无需更新，已经是最新版本',
        showClose: true
      })
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped lang="sass">
/**
 * 关于我们
 */
.us
  img
    display: block
    margin-top: 6px
  p
    font-size: 17px
    line-height: 54px
  a
    font-size: 20px
    color: #01a9f0
  button
    display: block
    margin-top: 30px
    font-size: 15px

  .logo
    padding: 12px 0 6px 40px
    margin-top: 15px
    font-size: 16px
    line-height: 24px
    background: url('../../assets/kdh.png') 0 40% no-repeat
      size: 24px
</style>
