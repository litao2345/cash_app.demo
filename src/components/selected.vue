<template>
  <div class="pop">
    <div class="deal">
      <el-button class="l" type="primary"
        @click="Change_Select(null)">返回</el-button>
    </div>
    <ul class="selected">
      <li :class="item.selected ? 'active' : ''"
        @click="Change_Select(item)"
        v-for="item of selected.items">{{item.showname}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: [
    'selected'
  ],
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    /**
     * [Change_Select 更改选择]
     * @param {[Object]} item [选项数据]
     * @return {[]} []
     */
    Change_Select (item) {
      if (item) {
        item = {
          index: this.selected.index,
          item: item.showname
        }
      }
      this.$emit('changed', item)
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
 * 滑入框
 */
.pop
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 1000
  padding: 12px 30px
  background: #fff
</style>
