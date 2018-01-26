<template>
  <div class="login"
    v-loading="lod">
    <div class="progressive">
      <img class="preview" :src="bg.pre"
        v-progressive="bg.url" />
    </div>

    <div class="main"
      v-if="viewsbar">
      <el-form :model="forms" :rules="rules" ref="forms">
        <dl class="txt">
          <dt>收银员登录</dt>
          <dd>
            <table width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <th><img src="../assets/login/account.png" /></th>
                <td>
                  <el-form-item prop="account">
                    <el-input placeholder="请输入登录帐号" clearable autofocus
                      v-model="forms.account"></el-input>
                  </el-form-item>
                </td>
              </tr>
              <tr>
                <th><img src="../assets/login/password.png" /></th>
                <td>
                  <el-form-item prop="password">
                    <el-input placeholder="请输入密码" clearable
                      v-model="forms.password"></el-input>
                  </el-form-item>
                </td>
              </tr>
            </table>
          </dd>
        </dl>
        <div class="btn">
          <el-button type="primary"
            @click="Submit_Form('forms')">登　　录</el-button>
        </div>
      </el-form>
    </div>

    <iTEMLoading
      v-if="!viewsbar"></iTEMLoading>
  </div>
</template>

<script>
import iTEMLoading from '@/components/loading'
import {_jsonp} from '@/lib/util'

import md5 from 'js-md5'

export default {
  components: {
    iTEMLoading
  },
  props: [
  ],
  data () {
    return {
      // 表单信息
      forms: {
        account: null,
        password: null
      },
      rules: {
        account: [
          {required: true, message: '请输入登录帐号', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },

      // 背景图片
      bg: {
        pre: window.Url + '/static/images/cash/bgX.jpg',
        url: window.Url + '/static/images/cash/bg.jpg'
      },

      viewsbar: true, // 视图状态
      lod: false // 加载动画
    }
  },
  computed: {
  },
  methods: {
    /**
     * [Submit_Form 提交登录信息]
     * @param {[Object]} datas [表单数据]
     * @return {[]} []
     */
    async Submit_Form (datas) {
      // 验证表单
      const test = await new Promise((resolve, reject) => {
        this.$refs[datas].validate((valid) => {
          resolve(valid)
        })
      })
      if (!test) return

      this.lod = true // 请求开始

      // 提交表单
      const $d = {
        account: this.forms.account.replace(/(^\s*)|(\s*$)/g, ''),
        password: md5(this.forms.password)
      }
      const rt = await _jsonp('checkLogin2', $d, this)
      if (!rt) {
        this.lod = false // 请求结束
        return
      }

      // webview存储周期店铺数据
      const keys = Object.keys(rt.shops)
      const data = {
        id: keys[0],
        name: rt.shops[keys[0]]['name']
      }

      let $shop = JSON.parse(localStorage.getItem('shop'))
      if (!$shop) {
        $shop = data
      } else {
        let find = false
        for (let index of keys) {
          if ($shop.id === index) find = true
        }
        if (!find) $shop = data
      }

      localStorage.setItem('shop', JSON.stringify($shop))

      // webview生存周期登录数据
      const $log = {
        a: $d.account,
        p: $d.password,
        shop_id: $shop.id
      }
      sessionStorage.setItem('log', JSON.stringify($log))

      // webview生存周期用户数据
      const $use = {
        uid: rt.uid,
        name: rt.name,
        shops: rt.shops,
        powers: rt.role_power_code.split(',')
      }
      sessionStorage.setItem('use', JSON.stringify($use))

      this.lod = false // 请求结束
      this.viewsbar = false // 开始同步数据
    }
  },
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped lang="sass">
/**
 * 登录
 */
.login
  position: relative
  height: 100%

  // 主区域
  .main
    position: absolute
    top: 50%
    left: 50%
    width: 520px
    margin: -220px 0 0 -260px
    &:before
      position: absolute
      top: -75px
      left: -10px
      width: 153px
      height: 54px
      content: ""
      background: url('../assets/logo.png')

  // 输入框
  .txt
    height: 310px
    padding: 0 50px
    margin-bottom: 60px
    background-color: #fff
    border-radius: 7px
    dt
      padding-top: 7px
      font-size: 22px
      line-height: 80px
      text-align: center
    th
      width: 23px
      height: 85px
      padding-right: 22px
      vertical-align: top
    img
      display: block
      margin: 16px auto 0

  // 按钮
  .btn
    position: relative
    button
      display: block
      width: 100%
      height: 70px
      font-size: 28px
      border-radius: 10px
</style>

<style lang="sass">
/**
 * 重置
 */
.login

  .el-form-item__content
    margin: 0 !important

  .el-form-item.is-success .el-input__inner
    border-color: #05a7f9

  .el-input__inner
    height: 50px
    font-size: 18px
</style>
