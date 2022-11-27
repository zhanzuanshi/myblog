<!--网站主页-->
<template>
<div class="main">
<!--  顶部动效组件-->
<Canvas></Canvas>
<!--  内容框组件-->
<Content></Content>
</div>
</template>

<script>
//导入 动效组件和内容框组件
import Canvas from "@/views/Canvas";
import Content from "@/views/Content";
export default {
  data() {
    return {

    }
  },
  //注册组件
  components:{
    Canvas,
    Content
  }
}
</script>

<style scoped lang="less">
//主体样式
.main{
  width: 100%;
  height: 100%;
  background-color: #eeeeee;


}
</style>