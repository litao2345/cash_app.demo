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
                  <el-form-item label="" prop="account">
                    <el-input placeholder="请输入登录帐号" clearable autofocus
                      v-model="forms.account"></el-input>
                  </el-form-item>
                </td>
              </tr>
              <tr>
                <th><img src="../assets/login/password.png" /></th>
                <td>
                  <el-form-item label="" prop="password">
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
import {mapActions} from 'vuex'

export default {
  components: {
    iTEMLoading
  },
  props: [
  ],
  data () {
    return {
      /**
       * 信息表单
       */
      viewsbar: true, // 视图状态
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

      /**
       * 背景图片
       */
      bg: {
        pre: window.Url + '/static/images/cash/bgX.jpg',
        url: window.Url + '/static/images/cash/bg.jpg'
      },

      /**
       * 其它
       */
      lod: false // 加载动画
    }
  },
  computed: {
  },
  methods: {
    ...mapActions([
      'userinfoSet',
      'shopsSet',
      'powersSet'
    ]),
    /**
     * [Submit_Form 提交登录信息]
     * @param {[Object]} datas [表单数据]
     * @return {[]} []
     */
    Submit_Form (datas) {
      this.$refs[datas].validate((valid) => {
        if (!valid) return false

        this.lod = true

        const $d = {
          account: this.forms.account.replace(/(^\s*)|(\s*$)/g, ''),
          password: md5(this.forms.password)
        }
        _jsonp('checkLogin2', $d, this)
        .then((rt) => {
          // 设置用户信息
          let $store = {
            uid: rt.uid,
            name: rt.name
          }
          this.userinfoSet($store)

          // 设置店铺列表
          $store = rt.shops
          this.shopsSet($store)

          // 设置权限
          $store = rt.role_power_code
          this.powersSet($store)

          // Webview生存周期登录信息
          const $log = {
            a: $d.account,
            p: $d.password,
            shop_id: Object.keys(rt.shops)[0]
          }
          sessionStorage.setItem('log', JSON.stringify($log))
        })
        .then(() => {
          // 切换状态，开始同步数据
          this.viewsbar = this.lod = false
        })
      })
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
 * 模块
 */
.login
  position: relative
  height: 100%

/**
 * 主区域
 */
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

/**
 * 输入框
 */
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

/**
 * 按钮
 */
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
