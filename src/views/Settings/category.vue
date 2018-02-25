<template>
  <div class="category">
    <div class="deal">
      <el-button type="primary">保存</el-button>
      <el-button type="primary">测试</el-button>
    </div>
    <div class="title">分类：</div>
    <div class="radio">
       <el-radio v-model="type" label="奶茶" border size="medium">奶茶</el-radio>
       <el-radio v-model="type" label="小吃" border size="medium">小吃</el-radio>
       <el-radio v-model="type" label="简餐" border size="medium">简餐</el-radio>
    </div>
    <div class="hot">如果您有多档口出菜，您可以设置每个分类的后厨打印</div>
    <el-radio-group
      v-model="cook_type_choose">
      <el-radio @change="choose" label="1">使用“默认后厨”打印机（“打印设置”中的后厨打印机）</el-radio>
      <el-radio @change="choose" label="2">指定后厨打印机</el-radio>
      <el-radio @change="choose" label="3">此分类不打印（用于酒水、纸巾等无需厨房出菜品）</el-radio>
    </el-radio-group>
    <template
      v-if="type_choose">
      <ul class="list">
        <li class="ip">
          <i><el-input placeholder="请输入" clearable></el-input></i>
          <p>打印机IP地址</p>
        </li>
        <li
          @click="Go_Selected(item)">
          <i class="el-icon-arrow-right"></i>
          <i>2</i>
          <p>打印宽度</p>
        </li>
      </ul>
    </template>

    <transition name="pop_up">
      <iTEMSelected :selected="selected"
        v-on:changed="Change_Selected"
        v-if="viewsbar"></iTEMSelected>
    </transition>
  </div>
</template>

<script>
import iTEMSelected from '../../components/selected'

export default {
  components: {
    iTEMSelected
  },
  props: [
  ],
  data () {
    return {
      cook_type_choose: '1',
      type: '奶茶',
      type_choose: false,

      selected: {}, // 当前选择对象
      viewsbar: false // 视图状态
    }
  },
  computed: {
  },
  methods: {
    /**
     * [Go_Selected 前往选择]
     * @param {[Object]} item [打印数据]
     * @return {[]} []
     */
    Go_Selected (item) {
      this.selected = {
        index: item.keyword,
        items: item.data
      }

      this.viewsbar = true
    },

    /**
     * [Change_Selected 更改选择]
     * @param {[Object]} item [选项数据]
     * @return {[]} []
     */
    Change_Selected (item) {
      if (item && (this.datas[item.index] !== item.item)) {
        this.datas[item.index] = item.item
      }

      this.viewsbar = false
    },

    choose (label) {
      console.log('label', label)
      if (label === '2') {
        this.type_choose = true
      } else {
        this.type_choose = false
      }
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>