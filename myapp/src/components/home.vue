<template>
   <el-container>
      <el-header>
            <el-row>
               <el-col :span="4">
                  <div class="">
                     <span>&nbsp;</span>
                  </div>
               </el-col>
               <el-col :span="16">
                  <div class="">
                     <el-tabs v-model="activeName" stretch   value = 'first'>
                           <el-tab-pane label="首页" name="first"><index></index></el-tab-pane>
                           <el-tab-pane label="123" name="second">2</el-tab-pane>
                           <el-tab-pane label="234" name="third">3</el-tab-pane>
                           <el-tab-pane label="345" name="fourth">4</el-tab-pane>
                     </el-tabs>
                  </div>
               </el-col>
               <el-col :span="4">
                  <div class="">
                        <el-dropdown>
                           <div class= 'icon el-arrow-down'>
                              <div  class="userIcon "> 
                                 <img  src='../assets/userInfo.jpg'></img>
                              </div>
                              <div class="userName"><span>wkp</span></div>
                           </div>
                              <el-dropdown-menu slot="dropdown">
                                 <el-dropdown-item>111111</el-dropdown-item>
                                 <el-dropdown-item>2</el-dropdown-item>
                                 <el-dropdown-item>3</el-dropdown-item>
                                 <el-dropdown-item>4</el-dropdown-item>
                                 <el-dropdown-item>5</el-dropdown-item>
                              </el-dropdown-menu>
                        </el-dropdown>
                  </div>
               </el-col>
            </el-row>
            

      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
   </el-container>
</template>

<script>
import index from '../components/index'
export default {
  name: 'home',
  data () {
    return {
       activeName:'second',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{
     index
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
.el{
   text-align: center;
}


 .el-dropdown {
    vertical-align: top;
  }
  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .icon{
     display: flex;
  }
  .userIcon{
     height:41px;
     width: 41px;
     border-radius: 50%;
     border: .1px gray solid;
     overflow: hidden;
  } 
  .userIcon img{
     width:40px;
     height:40px;
  }
  .userName{
     display: inline;
     height:41px;
     line-height: 41px;
     margin-left:10px;
     font-size: 18px;
  }
</style>
