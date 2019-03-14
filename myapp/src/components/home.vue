<template>
   <el-container>
      <el-header>
            <ul>
               <li>1</li>
               <li>2</li>
               <li>3</li>
               <li>4</li>
               <li>5</li>
            </ul>
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
/* background-color: #B3C0D1;*/
 text-align: center;
}
ul{
   display: inline-block;
   padding-left: 50px;
   padding-right: 50px;
}
li{
   display: inline-block;
   height: 20px;
   width: 150px;
   background-color: red;

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
