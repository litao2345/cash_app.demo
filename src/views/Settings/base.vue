<template>
  <div class="base">
    <div class="deal">
      <el-button type="primary"
        @click="Save_Changes">保存</el-button>
    </div>
    <dl class="topic">
      <dt>{{base.theme.name}}</dt>
      <dd>
        <el-checkbox-group
          v-model="theme">
          <el-checkbox :key="index" :label="item.id"
            v-for="(item, index) of base.theme.data">{{item.name}}</el-checkbox>
        </el-checkbox-group>
      </dd>
      <dt>{{base.sets.name}}</dt>
      <dd>
        <el-checkbox-group
          v-model="sets">
          <el-checkbox :key="index" :label="item.id"
            v-for="(item, index) of base.sets.data">{{item.name}}</el-checkbox>
        </el-checkbox-group>
      </dd>
      <dt>{{base.closed.name}}</dt>
      <dd>
        <el-radio-group
          v-model="closed">
          <el-radio :key="index" :label="item.id"
            v-for="(item, index) of base.closed.data">{{item.name}}</el-radio>
        </el-radio-group>
      </dd>
      <dt>{{base.casher.name}}</dt>
      <dd>
        <el-radio-group
          v-model="casher">
          <el-radio :key="index" :label="item.id"
            v-for="(item, index) of base.casher.data">{{item.name}}</el-radio>
        </el-radio-group>
      </dd>
      <dt>{{base.ip.name}}</dt>
      <dd>
        <el-input :placeholder="'请输入' + base.ip.name" clearable
          v-model="ip"></el-input>
      </dd>
      <dt>{{base.remarks.name}}</dt>
      <dd>
        <el-input type="textarea" :placeholder="'请输入' + base.remarks.name" resize="none"
          v-model="remarks"></el-input>
      </dd>
    </dl>
  </div>
</template>

<script>
import {_save} from '@/lib/websql'

import {mapGetters} from 'vuex'

export default {
  components: {
  },
  props: [
  ],
  data () {
    return {
      theme: [], // 收银主题
      sets: [], // 通用
      closed: 0, // 关闭主界面时
      casher: 0, // 主网络收银机
      ip: '', // 后厨显示地址
      remarks: '' // 快捷备注
    }
  },
  computed: {
    ...mapGetters([
      'base'
    ])
  },
  methods: {
    /**
     * [Init_Datas 初始化数据]
     * @return {[]} []
     */
    Init_Datas () {
      for (let index of Object.keys(this.base)) {
        let item = this.base[index]
        if (item.type === 'checkbox') {
          // 多选
          for (let it of item.data) {
            if (it.selected) this[item.keyword].push(it.id)
          }
        } else if (item.type === 'radio') {
          // 单选
          for (let it of item.data) {
            if (it.selected) this[item.keyword] = it.id
          }
        } else if (item.type === 'text') {
          // 文本
          this[item.keyword] = item.data
        }
      }
    },

    /**
     * [Save_Changes 保存设置]
     * @return {[]} []
     */
    async Save_Changes () {
      for (let index of Object.keys(this.base)) {
        let item = this.base[index]
        if (item.type === 'checkbox') {
          // 多选
          for (let it of item.data) {
            if (this[index].indexOf(it.id) > -1) it.selected = 1
            else it.selected = 0
          }
        } else if (item.type === 'radio') {
          // 单选
          for (let it of item.data) {
            if (this[index] === it.id) it.selected = 1
            else it.selected = 0
          }
        } else if (item.type === 'text') {
          // 文本
          item.data = this[index]
        }

        // 数据
        const data = {
          name: 'base' + index,
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
