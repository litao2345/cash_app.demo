<template>
  <div>
    <el-row class="settings_common_printer">
      <el-col :span="18"><div class="">小票打印机：</div></el-col>
      <el-col :span="6" ><el-button  type="primary">测试</el-button></el-col>
    </el-row>
    <el-row>
      <el-col :span="15"><span @click="open('a')">选择型号</span></el-col>
      <el-col :span="4"><span>不使用</span></el-col>
      <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
    </el-row>
    <el-row>
      <el-col :span="15"><span @click="open('b')">打印宽度</span></el-col>
      <el-col :span="4"><span>不使用</span></el-col>
      <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
    </el-row>
    <el-row>
      <el-col :span="15"><span @click="open('c')">字体大小</span></el-col>
      <el-col :span="4"><span>不使用</span></el-col>
      <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
    </el-row>
    <el-row>
      <el-col :span="15"><span @click="open('d')">打印份数</span></el-col>
      <el-col :span="4"><span>不使用</span></el-col>
      <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
    </el-row>

    <!-- 子组件 -->
    <itemselected ref="itemselected"></itemselected>
  </div>
</template>

<script>
import itemselected from '../../components/selected_box'
export default {
  components: {
    itemselected
  },
  props: [
  ],
  data () {
    return {
      pop_up: false,
      chooses: ['不使用', 'USB-0017', 'USB-0087', 'USB-0088']
    }
  },
  methods: {
    open (code) {
      if (code === 'a') {
        this.chooses = ['不使用', 'USB-0017', 'USB-0087', 'USB-0088']
      } else if (code === 'b') {
        this.chooses = ['50cm', '60cm', '70cm', '80cm']
      }
      console.log(code)
      this.pop_up = true
      this.$refs.itemselected.childFn('true')
    },
    back () {
      this.pop_up = false
    },
    aaa (val) {
      console.log('val', this.$refs.ref.value)
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>