<template>
  <div class="inline orders">
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
          <el-col :span="24"><span class="order_end">已下单</span></el-col>
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
          <el-row :key="order.key" class="greens"
            @click.native="pop(order)"
            v-for="order in orders"
            >
            <el-col :span="9">{{order.name}}</el-col>
            <el-col :span="5">{{order.price}}</el-col>
            <el-col :span="5">{{order.num}}</el-col>
            <el-col :span="5">{{order.total}}</el-col>
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
      <div class="footer">
        <el-row class="button">
          <el-col :span="8"><el-button type="primary">清空</el-button></el-col>
          <el-col :span="8"><el-button type="primary">开钱箱</el-button></el-col>
          <el-col :span="8"><el-button type="warning">退款</el-button></el-col>
        </el-row>
      </div>
    </div>
    <div class="main">
      <el-row class="top">
        <el-col :span="24">
          <el-input placeholder="11122的的" prefix-icon="el-icon-search" v-model="search"></el-input>
          <el-button type="primary">搜索</el-button>
        </el-col>
      </el-row>
      <el-row class="content">
        <el-table
          border
          :data="tableData"
          @row-click="select"
          style="width: 100%">
          <el-table-column
            prop="ordernum"
            label="订单流水号">
          </el-table-column>
          <el-table-column
            prop="time"
            label="交易时间">
          </el-table-column>
          <el-table-column
            prop="total_money"
            label="总金额">
          </el-table-column>
          <el-table-column
            prop="paidend"
            label="实付">
          </el-table-column>
          <el-table-column
            prop="unpaid"
            label="未结清">
          </el-table-column>
          <el-table-column
            prop="paytype"
            label="支付方式">
          </el-table-column>
          <el-table-column
            prop="state"
            label="同步状态">
          </el-table-column>
          <el-table-column
            prop="name"
            label="操作人">
          </el-table-column>
        </el-table>
      </el-row>

      <!-- 子组件 -->
      <iTEMOrders :orders2="orders2"
      @orders_select="getData"
      v-show="type">
      </iTEMOrders>
    </div>
  </div>
</template>

<script>
import iTEMOrders from '../../components/orders_select'
export default {
  components: {
    iTEMOrders
  },
  props: [
  ],
  data () {
    return {
      search: '',
      type: false,
      id: '',
      tableData: [{
        id: '1',
        ordernum: '123456789',
        time: '2016-05-02',
        total_money: '20',
        paidend: '10',
        unpaid: '10',
        paytype: '微信',
        state: '同步状态',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        orders: [
          {
            name: '西红柿蛋炒饭',
            price: '12',
            num: '2',
            total: '24',
            norms: '小份',
            out: ['上菜慢', '不干净', '口味差', '小份', '点错菜']
          },
          {
            name: '蛋炒饭',
            price: '1',
            num: '3',
            total: '3'
          },
          {
            name: '西红柿',
            price: '12',
            num: '3',
            total: '36'
          }
        ]
      }, {
        id: '2',
        ordernum: '123456789',
        time: '2016-05-04',
        total_money: '20',
        paidend: '10',
        unpaid: '10',
        paytype: '微信',
        state: '同步状态',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        orders: [
          {
            name: '蛋炒饭',
            price: '12',
            num: '2',
            total: '234'
          },
          {
            name: '饭炒蛋',
            price: '1',
            num: '3',
            total: '10'
          },
          {
            name: '萝卜烧肉',
            price: '12',
            num: '3',
            total: '34'
          }
        ]
      }, {
        id: '3',
        ordernum: '123456789',
        time: '2016-05-01',
        total_money: '20',
        paidend: '10',
        unpaid: '10',
        paytype: '微信',
        state: '同步状态',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        id: '4',
        ordernum: '123456789',
        time: '2016-05-03',
        total_money: '20',
        paidend: '10',
        unpaid: '10',
        paytype: '微信',
        state: '同步状态',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      orders: [],
      orders2: []
    }
  },
  methods: {
    /**
     * @param  {[object]} row [点击表格当前行数据]
     * @return {[object]} [存入orders]
     */
    select (row) {
      this.id = row.id
      this.orders = row.orders
    },
    /**
     * @param  {[object]} orders [点击菜单当前行的数据]
     * @return {[object]} [存入orders2]
     */
    pop (orders) {
      this.type = true
      this.orders2 = orders
    },
    getData (data) {
      this.type = false
    }
  }
}
</script>

<style scoped lang="sass">
/**
 * 重置
 */
.nav
  width: 360px
  padding: 0

/**
 * 表格
 */
.orders
  .main
    .top
      float: right
      padding: 10px
    .el-input
      width: 300px
    .content
      padding: 10px
      clear: both
  .greens
    cursor: pointer
    &:hover
      background: #f6f6f6
</style>

<style lang="sass">
/*.el-input input: :-webkit-input-placeholder;color:red}*/
/**
 * 弹窗
 */
.orders
  .main
    .pop_head
      .el-button:last-child
        float: right
    .pop_content
      padding: 10px 60px
      .menu 
        .el-col-10 
          p
            height: 50px
            line-height: 50px
        .menu_pic
          width: 100px
          height: 100px
          img
            max-width: 100%
            max-height: 100%
      .tag
        margin-left: -15px
        .el-tag--medium
          height: 40px
          margin: 10px 15px
          line-height: 40px
          text-align: center
          font-size: 15px
      .text
        width: 100%
        padding: 5px 10px
        box-sizing: border-box
</style>
