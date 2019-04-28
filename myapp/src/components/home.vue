<template>
   <el-container>
      <el-header>
            <el-row>
               <el-col :span="4">
                  <div class="">
                     111
                  </div>
               </el-col>
               <el-col :span="16">
                  <div class="">
                     <el-tabs v-model="activeName" stretch   value = 'first'>
                           <el-tab-pane label="5" name="first">1</el-tab-pane>
                           <el-tab-pane label="6" name="second">2</el-tab-pane>
                           <el-tab-pane label="7" name="third">3</el-tab-pane>
                           <el-tab-pane label="8" name="fourth">4</el-tab-pane>
                     </el-tabs>
                  </div>
               </el-col>
               <el-col :span="4">
                  <div class="">
                        <el-dropdown>
                              <el-button  class="userIcon el-arrow-down"> <image src='../assets/userInfo.jpg'></image></el-button>
                              <!-- <div class="userName"><span>wkp</span></div> -->
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
  .userIcon{
     height:41px;
     border-radius: 50%;
     border: .3px gray solid;
     display: inline-block;
     background-image: url('../assets/userInfo.jpg')
  }
  .userName{
     display: inline;
     height:36px;
     line-height: 36px;
     margin-top:0;
  }
</style>
