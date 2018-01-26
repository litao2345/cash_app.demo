<template>
  <div class="category">
    <div class="deal">
      <el-button type="primary">保存</el-button>
      <el-button type="primary">测试</el-button>
    </div>
    <el-row>
      <el-col :span="18" class="title">分类：</el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <div class="radio">
           <el-radio v-model="type" label="奶茶" border size="medium">奶茶</el-radio>
           <el-radio v-model="type" label="小吃" border size="medium">小吃</el-radio>
           <el-radio v-model="type" label="简餐" border size="medium">简餐</el-radio>
        </div>
      </el-col>
    </el-row>
    <div class="hint">如果您有多档口出菜，您可以设置每个分类的后厨打印</div>
    <el-row >
      <el-radio @change="choose" v-model="cook_type_choose" label="1">使用”默认后厨“打印机（”打印设置“中的后厨打印机）</el-radio>
      <el-radio @change="choose" v-model="cook_type_choose" label="2">指定后厨打印机</el-radio>
      <el-radio @change="choose" v-model="cook_type_choose" label="3">此分类不打印（用于酒水、纸巾等无需厨房出菜品）</el-radio>
    </el-row> 
    <div
      v-show="type_choose">
      <el-row class="IP">
        <div>打印机IP地址：</div><div class="boxs"><span class="detail">32456132</span></div>
      </el-row>
      <el-row class="print">
        <el-col :span="15"><span @click="open('b')">打印宽度</span></el-col>
        <el-col :span="4"><span>aaa</span></el-col>
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
      cook_type_choose: '1',
      type: '奶茶',
      type_choose: false
    }
  },
  methods: {
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