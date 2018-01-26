<template>
  <div class="print">
    <div class="deal">
      <el-button type="primary">保存</el-button>
      <el-button type="primary">恢复默认</el-button>
    </div>
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
