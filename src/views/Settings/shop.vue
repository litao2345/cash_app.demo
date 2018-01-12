<template>
  <div class="shop">
    <el-row>
      <el-col :span="18">门店选择：</el-col>
    </el-row>
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
