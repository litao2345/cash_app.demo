<template>
  <div class="back">
    <div class="deal">
      <el-button type="primary"
        @click="Save_Changes">保存</el-button>
      <el-button type="primary">测试</el-button>
    </div>
    <ul class="list">
      <li
        @click="Go_Selected(item)"
        v-for="item of back">
        <i class="el-icon-arrow-right"></i>
        <i
          v-if="it.selected"
          v-for="it of item.data">{{datas[item.keyword]}}</i>
        <p>{{item.name}}</p>
      </li>
    </ul>

    <transition name="pop_up">
      <iTEMSelected :selected="selected"
        v-on:changed="Change_Selected"
        v-if="viewsbar"></iTEMSelected>
    </transition>
  </div>
</template>

<script>
import iTEMSelected from '../../components/selected'
import {_save} from '@/lib/websql'

import {mapGetters} from 'vuex'

export default {
  components: {
    iTEMSelected
  },
  props: [
  ],
  data () {
    return {
      // 初始化
      datas: {
        ip: '',
        width: '',
        font: '',
        number: ''
      },

      selected: {}, // 当前选择对象
      viewsbar: false // 视图状态
    }
  },
  computed: {
    ...mapGetters([
      'back'
    ])
  },
  methods: {
    /**
     * [Init_Datas 初始化数据]
     * @return {[]} []
     */
    Init_Datas () {
      for (let index of Object.keys(this.back)) {
        let item = this.back[index]
        for (let it of item.data) {
          if (it.selected) this.datas[item.keyword] = it.showname
        }
      }
    },

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

    /**
     * [Save_Changes 保存设置]
     * @return {[]} []
     */
    async Save_Changes () {
      for (let index of Object.keys(this.back)) {
        let item = this.back[index]
        for (let it of item.data) {
          if (this.datas[index] === it.showname) it.selected = 1
          else it.selected = 0
        }

        // 数据
        const data = {
          name: 'back' + index,
          val: JSON.stringify(item)
        }
        const r = await _save('cash_conf', data, 'name') // 更新
        if (!r) {
          this.$message({
            type: 'error',
            message: '失败了 >_<',
            showClose: true
          })
          return
        }
      }

      this.$message({
        type: 'success',
        message: '设置保存成功',
        showClose: true
      })
    }
  },
  created () {
    this.Init_Datas()
  },
  mounted () {
  }
}
</script>
