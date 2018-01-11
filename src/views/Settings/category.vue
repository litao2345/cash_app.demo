<template>
  <div>
    <el-row class="settings_common_printer">
      <el-col :span="18"><div class="">后厨分类打印：</div></el-col>
    </el-row>
    <el-row class="">
      <el-col :span="18">
        <div class="">
           <el-radio v-model="type" label="奶茶" border size="medium">奶茶</el-radio>
           <el-radio v-model="type" label="小吃" border size="medium">小吃</el-radio>
           <el-radio v-model="type" label="简餐" border size="medium">简餐</el-radio>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div>如果您有多档口出菜，您可以设置每个分类的后厨打印</div>
    </el-row>
    <el-row class="settings_cook_type_choose">
      <el-radio v-model="cook_type_choose" label="1">使用”默认后厨“打印机（”打印设置“中的后厨打印机）</el-radio>
      <el-radio v-model="cook_type_choose" label="2">指定后厨打印机</el-radio>
      <el-radio v-model="cook_type_choose" label="3">此分类不打印（用于酒水、纸巾等无需厨房出菜品）</el-radio>
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
      cook_type_choose: '1',
      type: '奶茶'
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  }
}
</script>