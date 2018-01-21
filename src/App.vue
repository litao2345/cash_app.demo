<template>
  <section id="app" class="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/**
 * 公共样式
 */
html,
body{height:100%;overflow:hidden;}
body{margin:0;background-color:#F2F2F2;color:#1D1D1D;}

::-webkit-scrollbar{width:0;height:0;}

*{margin:0;padding:0;}

li{list-style:none;}
a,
a:link,
a:hover,
a:active,
a:visited{color:#1D1D1D;text-decoration:none;}

p{margin:0;}

input,
textarea{outline:none;}
textarea{resize:none;}

/**
 * 淡入淡出动画
 */
.fade-enter-active,
.fade-leave-active{transition:all .2s ease;}

.fade-enter,
.fade-leave-active{opacity:0;}

/**
 * 滑入框动画
 */
.pop_up-enter-active{transition:all .5s ease;}
.pop_up-leave-active{transition:all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);}
.pop_up-enter,
.pop_up-leave-to{transform:translateX(1920px);}

/**
 * 布局
 */
.inline{height:100%;overflow:hidden;}
.inline .nav{width:300px;height:100%;margin-right:10px;padding:0 30px;overflow-y:auto;float:left;background-color:#fff;}
.inline .main{height:100%;overflow-x:hidden;overflow-y:auto;background-color:#fff;position:relative;}

.inline .main .el-table{text-align:center;}
.inline .main .el-table th{background-color:#ccc;color:black;text-align:center;}
.inline .main .el-table th>.cell{text-align:center;}

.inline .public{padding:0 60px;}
.inline .public .title{padding:40px 0 20px;font-weight:bold;font-size:20px;border-bottom:1px solid #E4E4E4;line-height:40px;}

.inline .el-row{padding-top:10px;}

.inline .pop_up{width:100%;height:100%;position:absolute;top:0;background:white;z-index:20;}
.inline .pop_head{margin:0 60px;padding:30px 0;border-bottom:1px solid #D0D0D0;}
.inline .pop_radio{padding:10px 60px;}

/**
 * 重置
 */
.el-input__inner{border-color:#C8C8C8;}
.el-input__inner::-webkit-input-placeholder{color:#8C8C8C;}

/**
 * 其它
 */
.app{height:100%;overflow:hidden;}

.r{float:right;}

.blank{padding:20px 0;color:#777;font-size:15px;line-height:40px;text-align:center;}

/**
 * ProgresSive-Image控件
 */
.progressive{height:100%;overflow:hidden;position:relative;}
.progressive img{width:100%;height:100%;display:block;border:none;}
.progressive img.preview{filter:blur(2vw);transform:scale(1.05);}
.progressive img.hide{opacity:0;}
.progressive img.origin{position:absolute;left:0;top:0;animation:origin 1.5s ease-out;}
.progressive img.origin-scale{position:absolute;left:0;top:0;animation:origin-scale 1s ease-out;}

@-webkit-keyframes origin{
  0% {opacity:0;}
  100% {opacity:1;}
}
@-webkit-keyframes origin-scale{
  0% {opacity:0;transform:scale(1.1);}
  100% {opacity:1;transform:scale(1);}
}

/**
 *  订单/清单
 */
.inline .detailed .head{height:40px;background:#E5E5E5;text-align:center;line-height:20px;font-weight:bold;}
.inline .detailed .top{padding:0 20px;}
.inline .detailed .top .el-row:last-child{padding-bottom:10px;border-bottom:1px solid #ccc;}
.inline .detailed .top .order_end{padding-left:25px;background-image:url(assets/point_g.png);background-size:30px;background-repeat:no-repeat;background-position:0 40%;}
.inline .detailed .top .order_un{padding-left:25px;background-image:url(assets/point_b.png);background-size:30px;background-repeat:no-repeat;background-position:0 40%;}
.inline .detailed .top .order_out{padding-left:25px;background-image:url(assets/point_r.png);background-size:30px;background-repeat:no-repeat;background-position:0 40%;}
.inline .detailed .content{text-align:center;padding:0 20px;}
.inline .detailed .content .el-col-9{text-align:left;}
.inline .detailed .content .menu .el-row:first-child{color:#62A8EA}
.inline .detailed .content .menu .el-row:last-child{padding-bottom:10px;border-bottom:1px solid #ccc;}

.inline .detailed .footer{position:fixed;bottom:10px;width:360px;height:160px;background:#E5E5E5;text-align:center;}
.inline .detailed .footer .button{padding-top:60px;margin:50px 20px 0;border-top:1px solid #ccc;}
</style>
