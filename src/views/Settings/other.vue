<template>
  <div class="other">
    <div class="btn">
      <el-button  type="primary">测试</el-button>
      <el-button  type="primary">保存</el-button>
    </div>
    <div class="choose">
      <el-row class="type">
        <el-col :span="16"><span>选择顾客显示屏设备</span></el-col>
        <el-col :span="4"><span>不使用</span></el-col>
        <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
      </el-row>
      <el-row>
        <el-col :span="16"><span>选择电子称设备</span></el-col>
        <el-col :span="4"><span>不使用</span></el-col>
        <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
      </el-row>
      <el-row>
        <el-col :span="16"><span>选择读卡器设备</span></el-col>
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
