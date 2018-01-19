<template>
  <transition name="pop_up">
    <div class="pop_up" ref="pop_up_style">
      <div class="pop_head"
        @click="back">
        <el-button type="primary"> 返 回 </el-button>
      </div>
      <div class="pop_radio">
        <div>已有积分：<span>{{data.integral}}</span></div>
        <div class="gift">
          <el-checkbox-group v-model="checkboxGroup5">
            <el-checkbox border :key="gift.id" :label="gift.id"
            v-for="gift in gifts"
            @change="checkinlist"><div><img :src='gift.src'></div><p>{{gift.goods}}</p><p>{{gift.intergral}}积分</p></el-checkbox>
          </el-checkbox-group>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  components: {
  },
  props: [
    'data',
    'gifts'
  ],
  data () {
    return {
      checked3: true,
      checked4: false,
      basic_select: 1,
      checkboxGroup5: []
    }
  },
  methods: {
    back () {
      this.$emit('basic_select', this.basic_select)
    },
    checkinlist (val) {
      console.log(this.checkboxGroup5)
    }
  },
  created () {
  },
  mounted () {
  },
  watch: {
  }
}
</script>