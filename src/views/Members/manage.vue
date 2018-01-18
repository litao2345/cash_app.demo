<template>
  <div class="inline manage">
    <div class="public">
      <el-row class="title">
        <el-col :span="24">会员管理</el-col>
      </el-row>
      <div class="content">
        <el-row class="card">
          <el-col :span="24">会员卡号：<el-input v-model="input" placeholder="请输入卡号/手机号"></el-input></el-col>
          <el-col :span="12" justify="space-around" align="bottom">
            <div class="balance"> 余   额 ：<span>￥83</span></div>
            <div class="integral"> 积   分 ：<span>{{data.integral}}</span></div>
            <div>卡 类 型：储值卡</div>
          </el-col>
          <el-col :span="12">
            <div class="img"><img src="../../assets/logo.png"></div>
            <div> 有 效 期 ：2017-2-5</div>
          </el-col>
        </el-row>
        <div class="money">
          <el-row>充值金额：<el-input v-model="input" placeholder="请输入卡号/手机号"></el-input></el-row>
          <el-row>赠送金额：<el-input v-model="input" placeholder="请输入卡号/手机号"></el-input></el-row>
          <el-row><el-button type="primary"> 读 卡 </el-button><el-button type="primary"> 支 付 </el-button></el-row>
        </div>
      </div>
      <el-row>
        <div class="bottom" @click="show">
          <el-col :span="15"><span>选择礼品</span></el-col>
          <el-col :span="4"><span>无</span></el-col>
          <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
        </div>
      </el-row>
      <el-row><el-button type="primary"> 兑 换 </el-button></el-row>
      <itemselected ref="itemselected" :data="data" :gifts="gifts"
      v-show="type"
      @basic_select="getData"
      ></itemselected>
    </div>
  </div>
</template>

<script>
import itemselected from '../../components/gift_select'
import img from '../../assets/logo.png'
export default {
  components: {
    itemselected
  },
  props: [
  ],
  data () {
    return {
      input: '',
      type: false,
      data: {
        integral: '5000'
      },
      gifts: ''
    }
  },
  methods: {
    show () {
      this.gifts = [
        {
          id: 1,
          src: img,
          goods: '保温杯',
          intergral: '2000'
        },
        {
          id: 2,
          src: img,
          goods: '饭盒',
          intergral: '1000'
        },
        {
          id: 3,
          src: img,
          goods: '年费会员',
          intergral: '3000'
        }
      ]
      this.type = true
    },
    getData () {
      this.type = false
    }
  }
}
</script>

<style scoped>
</style>

