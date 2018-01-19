<template>
  <div class="inline members">
    <div class="nav">
      <div class="lnk"
        v-if="item.name === '会员'"
        v-for="item of $router.options.routes[0]['children']">
        <router-link :key="ix" :to="{path: it.path}"
          v-for="(it, ix) of item.children">{{it.name}}</router-link>
      </div>
    </div>
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'count',
      'members'
    ])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement'
    ])
  }
}
</script>

<style scoped>
/**
 * 重置
 */
.nav{width:120px;margin:0;padding:0;background:none;}

/**
 * 导航
 */
.nav a{height:51px;margin-bottom:1px;display:block;background:#A5C8E9;font-size:15px;line-height:50px;text-align:center;cursor:pointer;
  transition:all .2s ease;color:#fff;}
.nav a.router-link-active{background-color:#62A8EA;}
</style>

<style>
/**
 * 重置
 */
.manage .el-row{padding-top:25px;}
.members .title div{display:inline-block;}
.members .title .el-button{float:right;}

/**
 * 会员管理
 */
.members .manage .content{width:520px;}
.members .manage .content .card{padding:0 0 20px 20px;margin-top:20px;background:#F2F2F2;border-radius:10px;}
.members .manage .content .card .el-input{width:418px;border:1px solid #fff;}
.members .manage .content .card input{border:none;}
.members .manage .content .card .el-col{padding-top:20px;}
.members .manage .content .card div{margin-top:10px;}
.members .manage .content .card .balance span{color:#FF9966;font-size:28px;}
.members .manage .content .card .integral span{color:#FF9966;font-size:18px;}
.members .manage .content .card .img{width:120px;height:70px;text-align:center;}
.members .manage .content .card .img img{max-width:100%;max-height:100%;}

.members .manage .money .el-input{width:438px;}
 
.members .manage .bottom{padding-top:20px;border-top:1px solid #E4E4E4;}

/**
 * 新建会员
 */
.members .newmembers{padding:0 60px;}
.members .newmembers .content{padding-top:40px;}

/**
 * 会员管理 弹窗
 */
.members .pop_up .pop_radio .gift{overflow:hidden;padding-top:20px;}
.members .pop_up .pop_radio .gift .el-checkbox{float:left;width:162px;height:200px;padding:0;}
.members .pop_up .pop_radio .gift .el-checkbox div{width:160px;height:120px;text-align:center;}
.members .pop_up .pop_radio .gift .el-checkbox p{padding:15px 0 0 15px;font-size:16px;color:#000000}
.members .pop_up .pop_radio .gift .el-checkbox p:last-child{color:#FF9966;}
.members .pop_up .pop_radio .gift .el-checkbox div img{max-width:100%;max-height:100%;}
.members .pop_up .pop_radio .gift .el-checkbox .el-checkbox__input{position:absolute;right:2px;bottom:0}
.members .pop_up .pop_radio .gift .el-checkbox .el-checkbox__label{padding:0}
</style>
