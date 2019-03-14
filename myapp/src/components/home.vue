<template>
   <el-container>
      <el-header>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
              <el-menu-item index="1">处理中心</el-menu-item>
                 <el-submenu index="2">
                   <template slot="title">我的工作台</template>
                   <el-menu-item index="2-1">选项1</el-menu-item>
                   <el-menu-item index="2-2">选项2</el-menu-item>
                   <el-menu-item index="2-3">选项3</el-menu-item>
                   <el-submenu index="2-4">
                     <template slot="title">选项4</template>
                     <el-menu-item index="2-4-1">选项1</el-menu-item>
                     <el-menu-item index="2-4-2">选项2</el-menu-item>
                     <el-menu-item index="2-4-3">选项3</el-menu-item>
                   </el-submenu>
                 </el-submenu>
                 <el-menu-item index="3" disabled>消息中心</el-menu-item>
                     <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">11管理</a>
                 </el-menu-item>
                  <el-menu-item index="5" >消息中心</el-menu-item>
                  <el-menu-item index="6" >消息中心</el-menu-item>
            </el-menu>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
   </el-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  
    mounted:function(){
        // this.$http({
        //     methods:'get',
        //     url:'/k/hello'
        // })
        // .then(
        //     res=>{
        //         this.msg = res;
        //     }
        // )
           
    },
  
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
 background-color: #B3C0D1;
 
}
.el{
   text-align: center;
}
.el-main {
  background: yellow;
}
.el-footer {
  background: blue;
}
</style>
