<template>
  <div class="base">
    <div class="btn">
      <el-button  type="primary">测试</el-button>
    </div>
    <el-row>
      <el-col :span="23">收银主题：</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-checkbox-group v-model="collect_money">
          <el-checkbox label="点餐">点餐</el-checkbox>
          <el-checkbox label="水果">水果</el-checkbox>
          <el-checkbox label="零售">零售</el-checkbox>
          <el-checkbox label="中餐酒店">中餐酒店</el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="23">通用：</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-checkbox-group v-model="used">
          <el-checkbox label="有更新时自动升级">有更新时自动升级</el-checkbox>
          <el-checkbox label="开机时自动启动">开机时自动启动</el-checkbox>
          <el-checkbox >登陆后最大化窗口</el-checkbox>
        </el-checkbox-group>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="23">关闭主界面时：</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-radio v-model="interface" label="1">隐藏到任务栏通知区域，不退出程序</el-radio>
        <el-radio v-model="interface" label="2">退出程序</el-radio>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="23">主网络收银机：</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-radio v-model="computer" label="1">打开</el-radio>
        <el-radio v-model="computer" label="2">关闭</el-radio>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="23">后厨显示ip地址：</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <p class="ip">123132312</p>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="23">快捷备注：</el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <textarea class="text" rows="10"></textarea>
      </el-col>
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
      collect_money: ['点餐', '水果', '零售'],
      used: ['有更新时自动升级', '开机时自动启动'],
      interface: '1',
      computer: '1'
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
