<template>
  <div class="inline">
    <div class="nav">
      <dl class="sync">
        <dt>
          <div>
            <h2>营业数据同步</h2>
            <img src="../../assets/icon/sync1.png" />
            <el-button type="primary">同步数据</el-button>
            <span>同步时间可能较长请耐心等待</span>
          </div>
        </dt>
        <dd>
          <div>
            <h2>设置数据同步</h2>
            <img src="../../assets/icon/sync2.png" />
            <el-button type="primary">同步数据</el-button>
          </div>
        </dd>
      </dl>
    </div>
    <div class="main">
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
  background: none

/**
 * 同步数据
 */
.sync
  height: 100%
  dt, dd
    display: flex
    justify-content: center
    align-items: center
    height: 50%
    text-align: center
  div
    position: relative
  h2
    font-size: 17px
  img
    display: block
    margin: 20px auto
  button
    display: block
    margin: 0 auto
  span
    position: absolute
    bottom: -35px
    left: 50%
    width: 300px
    margin-left: -150px
    font-size: 13px
    color: #999
</style>
