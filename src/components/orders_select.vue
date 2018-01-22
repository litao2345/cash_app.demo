<template>
  <transition name="pop_up">
    <div class="pop_up" ref="pop_up_style">
      <div class="pop_head">
        <el-button type="primary"
        @click="back"> 返 回 </el-button>
        <el-button type="primary" 
        @click="back"> 确 定 </el-button>
      </div>
      <div class="pop_content">
        <el-row class="menu">
          <el-col :span="4"><div class="menu_pic"><img src="../assets/logo.png"></div></el-col>
          <el-col :span="10">
            <p>{{orders2.name}}</p>
            <p>单价：￥{{orders2.price}}</p>
          </el-col>
          <el-col :span="10">
            <p>
              <span>退菜数量：</span>
              <el-input-number v-model="num1" :min="1" label="描述文字"
              @change="handleChange" ></el-input-number>
            </p>
            <p>退菜总价: ￥{{total_price}}</p>
          </el-col>
        </el-row>
        <el-row>规格：</el-row>
        <el-row class="tag">
          <el-tag size="medium">{{orders2.norms}}</el-tag>
        </el-row>
        <el-row>退菜原因：</el-row>
        <el-row class="tag">
          <el-tag size="medium" :key="item"
          v-for="item in orders2.out">{{item}}</el-tag>
        </el-row>
        <el-row><textarea class="text" rows="10" placeholder="请输入其他原因"></textarea></el-row>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  components: {
  },
  props: [
    'orders2'
  ],
  data () {
    return {
      num1: 1,
      price: 10,
      total_price: 10
    }
  },
  methods: {
    back () {
      this.$emit('orders_select', '返回数据')
    },
    handleChange (value) {
      console.log(value)
      this.total_price = value * this.price
    }
  },
  created () {
  },
  mounted () {
    console.log('this.id', this.id)
  },
  watch: {
  }
}
</script>
