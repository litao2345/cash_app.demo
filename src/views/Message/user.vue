<template>
  <div class="inline user public">
    <el-row class="title">
      <div class="dot_c">全部</div><div class="dot_g">完成</div><div class="dot_p">未处理</div>
      <el-button type="primary" @click="submitForm('ruleForm')"> 刷新 </el-button>
    </el-row>
    <el-row class="content" :key="message.table"
    v-for="message in messages">
      <el-col :span="16"><div :class="message.status? 'dot_g':'dot_p'">{{message.table}}</div></el-col>
      <el-col :span="8">{{message.time}}</el-col>
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
      messages: [
        {
          table: '001号桌催餐',
          time: '2017-10-10 14:00',
          status: true
        },
        {
          table: '002号桌催餐',
          time: '2018-10-10 14:00',
          status: false
        }
      ]
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  },
  watch: {
  }
}
</script>