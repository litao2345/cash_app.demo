<template>
  <div>
    <transition name="slide-fade">
      <div class="settings_pop_up" v-show="pop_up" ref="pop_up_style" 
        :style="{width: screenWidth + 'px'}">
        <div @click="back" class="settings_back">
          <el-button type="primary"> 返 回 </el-button>
        </div>
        <el-row class="settings_choose">
         <el-radio-group v-model="choos_class" ref="ref" @change="aaa()">
           <el-radio v-for="choose in chooses" :key="choose" :label="choose">{{choose}}</el-radio>
         </el-radio-group>
        </el-row> 
      </div>
    </transition>
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
      pop_up: false,
      choos_class: '不使用',
      chooses: ['不使用', 'USB-0017', 'USB-0087', 'USB-0088'],
      screenWidth: document.body.clientWidth - 478
    }
  },
  methods: {
    open (code) {
    },
    back () {
      this.pop_up = false
    },
    aaa (val) {
      console.log('val', this.$refs.ref.value)
    },
    childFn (e) {
      console.log(e)
      this.pop_up = e
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