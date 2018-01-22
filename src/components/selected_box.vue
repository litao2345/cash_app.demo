<template>
  <transition name="pop_up">
    <div class="pop_up" ref="pop_up_style">
      <div class="pop_head"
        @click="back">
        <el-button type="primary"> 返 回 </el-button>
      </div>
      <div class="pop_radio">
        <el-row>
          <el-radio-group ref="ref"
            v-model="Basic_Select">
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
      Basic_Select: this.selected
    }
  },
  methods: {
    back () {
      if (this.selected === this.Basic_Select) this.$emit('Basic_Select', null)
      else this.$emit('Basic_Select', this.code.key, this.Basic_Select)
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