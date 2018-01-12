<template>
  <div>
    <el-row class="settings_common_printer">
      <el-col :span="18"><div class="">小票打印机：</div></el-col>
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
    <itemselected :code="code" :selected="selected" ref="itemselected"
      @basic_select="getData"
      v-show="type"></itemselected>
  </div>
</template>

<script>
import itemselected from '../../components/selected_box'
export default {
  components: {
    itemselected
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
