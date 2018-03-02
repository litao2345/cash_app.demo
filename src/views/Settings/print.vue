<template>
  <div class="print">
    <div class="deal">
      <el-button type="primary">保存</el-button>
      <el-button type="primary">恢复默认</el-button>
    </div>
    <ul class="list">
      <li>
        <i class="el-icon-arrow-right"></i>
        <i>不使用</i>
        <p>选择型号</p>
      </li>
    </ul>
    <div class="mode">
      <p>点击文本框进行编辑</p>
      <el-input type="textarea" placeholder="请输入" resize="none"></el-input>
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
  computed: {
  },
  methods: {
  },
  created () {
  },
  mounted () {
  }
}
</script>
