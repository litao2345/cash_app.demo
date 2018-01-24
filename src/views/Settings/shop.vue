<template>
  <div class="shop">
    <div class="btn">
      <el-button  type="primary">返回</el-button>
    </div>
    <el-row>
     <el-radio-group v-model="shop_choose">
       <el-radio :label="1">天鹅湖万达店</el-radio>
       <el-radio :label="2">禹州华侨城店</el-radio>
       <el-radio :label="3">明珠广场店</el-radio>
     </el-radio-group>
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
      shop_choose: 1
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
