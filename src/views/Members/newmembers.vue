<template>
  <div class="inline newmembers public">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row class="title">
        新建会员
        <el-button type="primary" @click="submitForm('ruleForm')"> 确 定 </el-button>
      </el-row>
      <div class="content">
        <el-form-item label="会员卡号：" prop="cardnum">
          <el-input v-model="ruleForm.cardnum"></el-input>
        </el-form-item>
        <el-form-item label="手机号码：" prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <el-form-item label="会员姓名：" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="会员性别：">
          <el-radio-group v-model="ruleForm.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="身份证号：" prop="IDcard">
          <el-input v-model="ruleForm.IDcard"></el-input>
        </el-form-item>
        <el-form-item label="会员生日：" prop="birthday">
          <el-input v-model="ruleForm.birthday"></el-input>
        </el-form-item>
<!--         <el-form-item label="选择地区：">
          <el-cascader
            :options="cityOptions"
            :value="city"
            v-model="ruleForm.addressed"
            @change="changeProvince"
            change-on-select>
          </el-cascader>
        </el-form-item> -->
        <el-form-item label="详细地址：" prop="address">
          <el-input v-model="ruleForm.address"></el-input>
        </el-form-item>
        <el-form-item label="备注：">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
// import cityOptions from '../../api/city_data2017_element.js'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      if (!(/^1[3|4|5|8][0-9]\d{4,8}$/.test(value))) {
        callback(new Error('输入手机号码有误'))
      } else {
        callback(new Error('输入正确'))
      }
    }
    return {
      // cityOptions: cityOptions,
      ruleForm: {
        cardnum: '',
        phone: '',
        name: '',
        sex: '男',
        IDcard: '',
        birthday: '',
        address: '',
        desc: '',
        addressed: ''
      },
      rules: {
        cardnum: [
          { required: true, message: '请输入会员卡号', trigger: 'blur' }
          // { min: 10, max: 12, message: '请输入11位卡号', trigger: 'blur' }
        ],
        phone: [
          { validator: validatePass, trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        IDcard: [
          { required: true, message: '请输入身份证号', trigger: 'blur' }
        ],
        birthday: [
          { required: true, message: '请输入生日', trigger: 'blur' }
        ],
        address: [
          { required: true, message: '请输入详细地址', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      console.log(this.ruleForm)
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log(valid)
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
</style>

