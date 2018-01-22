<template>
  <div>
    <el-row>
      <el-col :span="18">小票打印机：</el-col>
      <el-col :span="6" ><el-button  type="primary">测试</el-button></el-col>
    </el-row>
    <el-row>
      <div @click="open('a')">
        <el-col :span="15"><span>选择型号</span></el-col>
        <el-col :span="4"><span>{{selected_name}}</span></el-col>
        <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
      </div>
    </el-row>
    <el-row>
      <el-col :span="15"><span @click="open('b')">打印宽度</span></el-col>
      <el-col :span="4"><span></span></el-col>
      <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
    </el-row>
    <el-row>
      <el-col :span="15"><span>字体大小</span></el-col>
      <el-col :span="4"><span></span></el-col>
      <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
    </el-row>
    <el-row>
      <el-col :span="15"><span>打印份数</span></el-col>
      <el-col :span="4"><span></span></el-col>
      <el-col :span="4"><span class="el-icon-arrow-right"></span></el-col>
    </el-row>

    <!-- 子组件 -->
    <iTEMSelected :code="code" :selected="selected" ref="iTEMSelected"
      @Basic_Select="getData"
      v-show="type"></iTEMSelected>
  </div>
</template>

<script>
import iTEMSelected from '../../components/selected_box'
export default {
  components: {
    iTEMSelected
  },
  props: [
  ],
  data () {
    return {
      code: '',
      selected: 0,
      selected_name: '未使用',
      type: false
    }
  },
  methods: {
    /**
     * @param  {[string]} k [获取索引]
     * @return {[object]} [传送code给子组件json数组]
     */
    open (k) {
      this.code = {
        key: k,
        name: '选择型号',
        list: {
          0: {
            id: 0,
            name: '未使用'
          },
          1: {
            id: 1,
            name: '2017-2-3'
          },
          2: {
            id: 2,
            name: '2018-2-5'
          }
        }
      }
      this.type = true
    },
    /**
     * @param  {[string]} k [判断是否选择]
     * @param  {[number]} select [选择的索引值]
     * @return {[string]} [选择后的数据]
     */
    getData (k, select) {
      this.type = false
      if (k !== null) {
        this.selected_name = this.code.list[select].name
        this.selected = select
      }
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>
