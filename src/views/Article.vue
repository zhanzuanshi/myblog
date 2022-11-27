<template>
<div class="article">
  <Content/>
</div>
</template>

<script>
import Content from "@/views/Content";
export default {
  components: {Content},
  data() {
    return {
      components:{
        Content
      }
    }
  }
}
</script>

<style scoped lang="less">
  .article{
    height: 100%;
    background-color: #eeeeee;
  }
</style>