<template>
  <transition>
    <div class="pop_up" ref="pop_up_style">
      <div class="nav detailed">
        <el-row class="head">
          <el-col :span="24">清单</el-col>
        </el-row>
        <div class="top">
          <el-row>
            <el-col :span="24">流水号：12345679</el-col>
          </el-row>
          <el-row>
            <el-col :span="24">桌号：001（三人）</el-col>
          </el-row>
          <el-row>
            <el-col :span="24">开台时间：2018-01-01 14:00</el-col>
          </el-row>
          <el-row>
            <el-col :span="24"><span class="order_un">未下单</span><span class="order_end">已下单</span><span class="order_out">已退菜</span></el-col>
          </el-row>
        </div>
        <div class="content">
          <div class="menu">
            <el-row>
              <el-col :span="9">品名</el-col>
              <el-col :span="5">单价</el-col>
              <el-col :span="5">数量</el-col>
              <el-col :span="5">金额</el-col>
            </el-row>
            <el-row>
              <el-col :span="9">西红柿炒蛋(小份)</el-col>
              <el-col :span="5">12</el-col>
              <el-col :span="5">2</el-col>
              <el-col :span="5">24</el-col>
            </el-row>
          </div>
          <el-row>
            <el-col :span="9">合计退货</el-col>
            <el-col :span="5">&nbsp;</el-col>
            <el-col :span="5">0</el-col>
            <el-col :span="5">0</el-col>
          </el-row>
          <el-row>
            <el-col :span="9">优惠</el-col>
            <el-col :span="5">&nbsp;</el-col>
            <el-col :span="5">&nbsp;</el-col>
            <el-col :span="5">0</el-col>
          </el-row>
          <el-row>
            <el-col :span="9">实际退款</el-col>
            <el-col :span="5">&nbsp;</el-col>
            <el-col :span="5">&nbsp;</el-col>
            <el-col :span="5">0</el-col>
          </el-row>
        </div>
      </div>
      <div class="shade" @click="back"></div>
    </div>
  </transition>
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
    back () {
      this.$emit('printer_select', this.basic_select)
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