<template>
  <div>
    <div class="btn"><el-button  type="primary">测试</el-button></div>
    <el-row>
      <el-col :span="18">小票打印机：</el-col>
    </el-row>
    <div class="choose">
      <el-row>
        <el-col :span="16"><span>选择型号</span></el-col>
        <el-col :span="4"><span>不使用</span></el-col>
        <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
      </el-row>
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
  methods: {
  },
  created () {
  },
  mounted () {
  }
}
</script>
