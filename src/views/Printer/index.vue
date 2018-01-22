<template>
	<div class="inline printer">
		<div class="main">
			<div class='title'>
				<el-row>
					<el-col :span="24">
						<el-button type="primary">补打</el-button>
						<el-button type="primary">重连</el-button>
						<el-button type="primary">测试</el-button>
					</el-col>
				</el-row>
			</div>
			<el-row class="printer_type">
				<div :key="print_type.id" class="pub" :class="[index==choose ? 'printer_type2':'printer_type1']"
				v-for="(print_type,index) in pring_types"
        @click="addclass(index)">{{print_type.name}}</div>
			</el-row>
      <el-row class="head">
        <el-col :span="12">历史小票</el-col>
        <el-col :span="12">
          <el-input placeholder="输入订单号/桌号" prefix-icon="el-icon-search" v-model="search"></el-input>
          <el-button type="primary">搜索</el-button>
        </el-col>
      </el-row>
      <el-table
        border
        ref="multipleTable"
        :data="tableData3"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="number"
          label="订单流水号"> 
        </el-table-column>
        <el-table-column
          label="交易时间">
          <template slot-scope="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column
          prop="table"
          label="桌号类型"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="pay"
          label="支付状态"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="alike"
          label="同步状态"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="pay_people"
          label="支付操作人"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column width="100" label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="check(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <itemselected
      v-show="type"
      @printer_select="getData"></itemselected>
		</div>
	</div>
</template>

<script>
import itemselected from '../../components/printer_select'

export default {
  components: {
    itemselected
  },
  props: [
  ],
  data () {
    return {
      choose: 0,
      search: '',
      type: false,
      pring_types: [
        {
          id: 1,
          name: '后厨打印机1'
        },
        {
          id: 2,
          name: '后厨打印机2'
        },
        {
          id: 3,
          name: '钱箱打印机'
        },
        {
          id: 4,
          name: '钱箱打印机'
        },
        {
          id: 5,
          name: '小票打印机'
        },
        {
          id: 6,
          name: '标签'
        }
      ],
      tableData3: [{
        number: '12234452825',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        table: '3号桌子',
        pay: '已支付',
        alike: '已同步',
        pay_people: '操作人'
      }, {
        number: '12234452825',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        table: '3号桌子',
        pay: '已支付',
        alike: '已同步',
        pay_people: '操作人'
      }, {
        number: '12234452825',
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        table: '3号桌子',
        pay: '已支付',
        alike: '已同步',
        pay_people: '操作人'
      }],
      multipleSelection: []
    }
  },
  computed: {
  },
  methods: {
    addclass (index) {
      this.choose = index
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    check (index, row) {
      this.type = true
      console.log(index, row)
    },
    getData () {
      this.type = false
    }
  }
}
</script>

<style scoped lang="sass">
.printer
  .main
    padding: 20px 60px 10px
    .title
      padding: 20px 0
      overflow: hidden
      border-bottom: 1px solid #E4E4E4
      .el-row
        float: right

    .printer_type
      overflow: hidden
      .pub
        width: 100px
        float: left
        margin-right: 20px
        padding-top: 80px
        background-repeat: no-repeat
        background-position: 50% 40%
        background-size: 50px
        text-align: center
      .printer_type1
        background-image: url(../../assets/printer1.png)
      .printer_type2
        background-image: url(../../assets/printer2.png)

    .head
      padding-top: 40px
      .el-col:first-child
        font-weight: bold
        font-size: 20px
        line-height: 40px
      .el-col:last-child
        padding-bottom: 10px
        text-align: right
    .el-input
      width: 300px
</style>

<style lang="sass">
/**
 * 弹窗
 */
.printer
  .shade
    width: 100%
    height: 100%
    position: fixed
    top: 0
    background: gray
    opacity: 0.5
    z-index: -1
  .pop_up
    width: 400px
    left: -10px
    .detailed
      width: 400px
      padding: 0
      margin-left: 10px
</style>
