<!--底部内容框组件-->
<template>
  <!--  底部整体-->
  <div class="content">
    <!--    公告栏-->
    <div class="Announcement">
      <span  class="iconfont icon-gonggao">偷偷告诉大家,本博客的后台管理也正在制作，为大家准备了游客专用账号！</span>
    </div>
    <!--      底部内容栏-->
    <div class="text">
      <!--        内容栏左侧文章模块-->
      <div class="leftcontent" >
        <div class="txt" v-for="item in Article" :key="item.id">
            <span class="txt_title">
            {{item.title}}
            </span><br>
          <span class="txt_content">
            {{item.txt}}
          </span>
        </div>
      </div>
      <!--        内容栏右侧信息栏-->
      <div class="rightcontent">
        <!--          右侧上边信息栏-->1111
        <div class="Personal">

        </div>
        <!--          右侧中间排行-->
        <div class="hotRank">

        </div>
        <!--          右侧底部链接-->
        <div class="href">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Article:[
        {id:0,title:'基于laypage的layui扩展模块（pagesize.js）！',txt:'该模块主要是针对当前版本laypage没有页容量控制功能而制作，使用该模块后即可实现每页显示多少条数据的控制！本人原创，但是可能有可能只对本人的分页写法！'},
        {id:1,title:'基于laypage的layui扩展模块（pagesize.js）！',txt:'该模块主要是针对当前版本laypage没有页容量控制功能而制作，使用该模块后即可实现每页显示多少条数据的控制！本人原创，但是可能有可能只对本人的分页写法！'},
        {id:2,title:'基于laypage的layui扩展模块（pagesize.js）！',txt:'该模块主要是针对当前版本laypage没有页容量控制功能而制作，使用该模块后即可实现每页显示多少条数据的控制！本人原创，但是可能有可能只对本人的分页写法！'},
        {id:3,title:'基于laypage的layui扩展模块（pagesize.js）！',txt:'该模块主要是针对当前版本laypage没有页容量控制功能而制作，使用该模块后即可实现每页显示多少条数据的控制！本人原创，但是可能有可能只对本人的分页写法！'},
        {id:4,title:'基于laypage的layui扩展模块（pagesize.js）！',txt:'该模块主要是针对当前版本laypage没有页容量控制功能而制作，使用该模块后即可实现每页显示多少条数据的控制！本人原创，但是可能有可能只对本人的分页写法！'}
      ]
    }
  }
}
</script>

<style lang='less' scoped>
.content{
  //margin-top: 15px;
  height: 70%;
  width: 90%;
  display: flex;
  margin: 15px 5% 15px 5%;
  flex-direction: column;
  .Announcement{
    height: 37px;
    width: 100%;
    background-color: white;
    color: #545c64;
    margin-bottom: 15px;
    span{
      line-height: 37px;
    }
  }
  //下部内容栏主体样式
  .text{
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  //  内容栏左侧样式
  .leftcontent{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //左侧内部元素样式
    .txt{
      height: 100px;
      padding: 15px;
      margin-bottom: 10px;
      box-shadow:  0 2px 10px 0 rgb(0 0 0 / 10%);
      background-color: white;
    }
    //内容标题
    .txt_title{
      font-size: 18px;
      color:black;
    }
    //内容
    .txt_content{
      font-size: 14px;
      text-indent: 2em;
    }
  }
  //内容栏右侧样式
  .rightcontent{
    width: 30%;
    margin-bottom: 10px;
    margin-left: 20px;
    background-color: white;
    box-shadow:  0 2px 10px 0 rgb(0 0 0 / 10%);
  }
}
</style>