<template>
  <div>
    <el-row class="settings_common_printer">
      <el-col :span="18"><div class="">发票打印机：</div></el-col>
      <el-col :span="6" ><el-button  type="primary">测试</el-button></el-col>
    </el-row>
    <el-row>
      <el-col :span="15"><span>选择型号</span></el-col>
      <el-col :span="4"><span>不使用</span></el-col>
      <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
    </el-row>
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
