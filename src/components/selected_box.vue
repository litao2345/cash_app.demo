<template>
  <transition name="pop_up">
    <div class="pop_up" ref="pop_up_style" :style="{width: screenWidth + 'px'}">
      <div class="pop_head"
        @click="back">
        <el-button type="primary"> 返 回 </el-button>
      </div>
      <div class="pop_radio">
        <el-row>
          <el-radio-group ref="ref"
            v-model="basic_select">
            <el-radio :key="index" :label="item.id"
              v-for="(item, index) in code.list">{{item.name}}</el-radio>
          </el-radio-group>
        </el-row> 
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  components: {
  },
  props: [
    'code',
    'selected'
  ],
  data () {
    return {
      screenWidth: document.body.clientWidth - 478,
      basic_select: this.selected
    }
  },
  methods: {
    back () {
      if (this.selected === this.basic_select) this.$emit('basic_select', null)
      else this.$emit('basic_select', this.code.key, this.basic_select)
    }
  },
  created () {
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth - 478
      })()
    }
  },
  watch: {
    screenWidth (val) {
      if (!this.timer) {
        this.screenWidth = val
        this.timer = true
        let that = this
        setTimeout(function () {
          that.timer = false
        }, 400)
      }
    }
  }
}
</script>