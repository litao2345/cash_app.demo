<template>
  <div class="details">
    <div class="none hidden">请选择桌号进行操作</div>
    <dl class="list">
      <dt>
        <h2>清　　　　单</h2>
        <div class="name">
          <span class="r">4人用餐</span>
          <p>桌名：001</p>
        </div>
        <div class="time">开台时间：2018-01-01 12:00</div>
        <div class="lnks">
          <a class="blank">未下单</a>
          <a class="open">已下单</a>
        </div>
      </dt>
      <dd>
        <div class="item">
          <el-table show-summary>
            <el-table-column sortable label="品名"></el-table-column>
            <el-table-column sortable label="单价"></el-table-column>
            <el-table-column label="数量"></el-table-column>
            <el-table-column sortable label="金额"></el-table-column>
          </el-table>
        </div>
        <div class="more">
          <el-input type="textarea" placeholder="请输入备注"></el-input>
          <div class="deal">
            <el-button type="primary">清空</el-button>
            <el-button type="primary">下单</el-button>
            <el-button type="primary">开台</el-button>
          </div>
        </div>
      </dd>
    </dl>
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
    /**
     * [Change_Select 更改选择]
     * @param {[Object]} item [选项数据]
     * @return {[]} []
     */
    Change_Select (item) {
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped lang="sass">
/**
 * 清单详情
 */
.details
  position: relative
  height: 100%

/**
 * 未选桌
 */
.none
  position: absolute
  top: 50%
  left: 50%
  width: 160px
  height: 40px
  padding-top: 120px
  margin: -80px 0 0 -80px
  color: #fff
  text-align: center
  background: url('../assets/shopping/desk.png') 50% 0 no-repeat

/**
 * 清单
 */
.list
  position: relative
  height: 100%
  dt h2
    font-size: 17px
    line-height: 40px
    color: #fff
    text-align: center
  dd
    position: absolute
    top: 124px
    right: 0
    left: 0
    bottom: 0
    font-size: 14px

  .name,
  .time,
  .lnks
    padding: 0 20px
    font-size: 14px
    line-height: 24px
    background-color: #fff

  .name
    padding-top: 9px
    span
      padding-right: 25px
      cursor: pointer
      background: url('../assets/shopping/edit.png') 100% 30% no-repeat #fff

  .item
    position: absolute
    top: 0
    right: 0
    bottom: 150px
    left: 0
    overflow-y: auto
    padding: 0 20px
    background-color: #fff

  .more
    position: absolute
    right: 0
    bottom: 0
    left: 0
    padding: 12px 20px

  .lnks
    overflow: hidden
    font-size: 14px
    line-height: 27px
    a
      border: none
      &:before
        margin: 7px 10px 0 0

  .deal
    padding: 0
    border: none
    button
      margin: 0
      &:first-child
        float: left
      &:last-child
        float: none
        display: block
        margin: 0 auto
</style>

<style lang="sass">
/**
 * 重置
 */
.details

  .el-textarea
    display: block
    width: auto
    textarea
      height: 74px
      padding: 6px 12px
      margin-bottom: 14px
      font-size: 14px

  .el-table
    border-top: 1px solid #e4e4e4
    th
      padding: 0
      background-color: #fff
</style>
