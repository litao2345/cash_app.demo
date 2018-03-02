<template>
  <div class="inline manage">
    <div class="public">
      <el-row class="title">
        <el-col :span="24">会员管理</el-col>
      </el-row>
      <div class="content">
        <el-row class="card">
          <el-col :span="24">会员卡号：<el-input v-model="card_no" @blur="getCard" placeholder="请输入卡号/手机号"></el-input></el-col>
          <el-col :span="12" justify="space-around" align="bottom">
            <div class="balance"> 姓   名 ：<span>{{member_data.username}}</span></div>
            <div class="balance"> 余   额 ：<span>{{member_data.val}}</span></div>
            <div class="integral"> 积   分 ：<span>{{member_data.integral}}</span></div>
            <div>卡 类 型：<span>{{member_data.card_type}}</span></div>
          </el-col>
          <el-col :span="12">
            <div class="img"><img src="../../assets/logo.png"></div>
            <div> 有 效 期 ：<span>{{member_data.end_time}}</span></div>
          </el-col>
        </el-row>
        <div class="money">
          <el-row>充值金额：<el-input v-model="money" placeholder="充值金额"></el-input></el-row>
          <el-row>赠送金额：<el-input v-model="give_money" placeholder="赠送金额"></el-input></el-row>
          <el-row><el-button type="primary" @click="readCard"> 读 卡 </el-button><el-button type="primary" @click="saveChanges"> 支 付 </el-button></el-row>
        </div>
      </div>
      <el-row>
        <div class="bottom" @click="show">
          <el-col :span="15"><span>选择礼品</span></el-col>
          <el-col :span="4"><span>无</span></el-col>
          <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
        </div>
      </el-row>
      <el-row><el-button type="primary" @click="exchangeGift"> 兑 换 </el-button></el-row>
      <itemselected ref="itemselected" :data="data" :gifts="gifts"
      v-show="type"
      @basic_select="getData"
      @gifts_select="selectGift"
      ></itemselected>
    </div>
  </div>
</template>

<script>
import itemselected from '../../components/gift_select'
import {_jsonp} from '@/lib/util'
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
        integral: '0'
      },
      gifts: [],
      seleted_gift: [],
      need_integral: 0,
      card_no: '',
      money: 0,
      give_money: 0,
      member_data: {
        username: '--',
        val: '--',
        end_time: '--',
        integral: 0,
        card_type: '--'
      }
    }
  },
  methods: {
    async show () {
      const $d = {}
      const rt = await _jsonp('getExchangeGoods', $d, this)
      if (rt) {
        this.gifts = rt.list
        this.type = true
      }
    },
    getData () {
      this.type = false
    },
    selectGift (gifts, needIntegral) {
      this.need_integral = 0
      for (let n = 0; n < gifts.length; n++) {
        for (let i = 0; i < this.gifts.length; i++) {
          if (this.gifts[i].id === gifts[n]) {
            this.need_integral = parseInt(this.need_integral) + parseInt(this.gifts[i].integral)
          }
        }
      }
      this.seleted_gift = gifts[0]
    },
    /**
     * 失去焦点读取会员卡信息
     */
    async getCard () {
      if (this.card_no.length <= 0) {
        return false
      }
      const reg = new RegExp('^[0-9]*$')
      if (!reg.test(this.card_no)) {
        this.$message({
          type: 'error',
          message: '卡号必须为数字',
          showClose: true
        })
        return
      }

      const $d = {
        card_no: this.card_no
      }
      const rt = await _jsonp('getCardInfo', $d, this)
      if (rt) {
        this.showinfo(rt)
      }
    },
    /**
     * 点击按钮调用客户端方法读取会员卡卡号
     */
    readCard () {
      if (typeof (window.client) !== 'undefined' && typeof (window.client.ReadCardData) !== 'undefined') {
        window.client.ReadCardData()
      }
    },
    /**
     * 会员充值
     */
    async saveChanges () {
      if (this.card_no.length <= 0) {
        this.$message({
          type: 'error',
          message: '请输入会员卡号',
          showClose: true
        })
        return false
      }
      const reg = new RegExp('^[0-9]*$')
      if (!reg.test(this.card_no)) {
        this.$message({
          type: 'error',
          message: '卡号必须为数字',
          showClose: true
        })
        return
      }
      if (this.money <= 0) {
        this.$message({
          type: 'error',
          message: '输入充值金额',
          showClose: true
        })
        return
      }
      const $d = {
        card_no: this.card_no,
        discount_money: 0,
        price: this.money,
        real_pay_money: this.money
      }
      const rt = await _jsonp('getCardInfo', $d, this)
      if (rt) {
        this.showinfo(rt)
      }
    },
    /**
     * 展示会员卡信息
     * @param {[object]} data 会员卡信息json对象
     */
    showinfo (data) {
      const wapp = new window.App()
      if (!data.member.name) {
        this.member_data.username = '未绑定用户信息'
      } else {
        this.member_data.username = data.member.name
      }

      if (parseInt(data.card.end_time) === 0) {
        this.member_data.end_time = '永久'
      } else {
        this.member_data.end_time = wapp.TimeToStr(data.card.end_time, 2)
      }
      this.member_data.val = data.card.val
      this.member_data.card_type = '储值卡'
      this.member_data.integral = data.member.integral
      this.data.integral = data.member.integral
    },
    /**
     * 积分兑换
     */
    async exchangeGift () {
      if (this.card_no.length <= 0) {
        return
      }
      if (this.data.integral < this.need_integral) {
        this.$message({
          type: 'error',
          message: '积分不足',
          showClose: true
        })
        return false
      }
      if (!this.seleted_gift) {
        this.$message({
          type: 'error',
          message: '选择需要兑换的礼品',
          showClose: true
        })
        return false
      }
      const $d = {
        card_no: this.card_no,
        exchange_id: this.seleted_gift
      }
      const rt = await _jsonp('memberExchangeGoods', $d, this)
      if (rt) {
        this.showinfo(rt)
        this.seleted_gift = []
        this.getData()
        this.$message({
          type: 'success',
          message: '兑换成功',
          showClose: true
        })
      }
    }
  }
}
</script>

<style scoped>
</style>

