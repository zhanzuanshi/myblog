<template>
<div class="home">
  <div class="top">
  <div class="nav">
    <span class="title">传媒程序员</span>
  <el-menu
      router
      default-active="/Main"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
    <el-menu-item index="/Main" class="iconfont icon-shouyefill">网站首页</el-menu-item>
    <el-menu-item index="/Article" class="iconfont icon-wenzhang-copy">文章分类</el-menu-item>
    <el-menu-item index="/About" class="iconfont icon-guanyu">关于本站</el-menu-item>
  </el-menu
  >
  </div>
  </div>
  <div class="bottom">
  <router-view/>
<!--  免责声明-->
  <div class="Disclaimer">
    <span>Copright @ 2022 传媒程序员</span>
    <span>鄂ICP备220001号</span>
  </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
//页面主体样式
.home{
  width: 100%;
  height: 100%;
  background-color: #eeeeee;
//导航栏占位
.top{
  height: 60px;
//导航栏样式
.nav{
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  background-color: #545c64;
//  导航栏大标题样式
.title{
  font-family: 宋体;
  font-size: 30px;
  line-height: 60px;
  color: white;
}
  .el-menu.el-menu--horizontal{
    width: 65%;
    display: flex;
    justify-content: center;
    border-bottom: none;
  }
}
}
  .Disclaimer{
    background-color: #858d93;
    height: 50px;
    color: white;
    font-size: 13px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .bottom{
    background-color: #eeeeee;
  }
}
</style>