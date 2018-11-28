<template>
	<div class = 'login-right'>
	<el-col :span="7" :offset='15'>
		<el-tabs type="border-card" :stretch = 'true'>
			<el-tab-pane :span="12">
					 <span slot="label" ><i class="el-icon-circle-check-outline"></i> 登录</span>
				     <!-- 登录 -->
				    <el-form :model="fm1" status-icon  ref="fm1"   :rules='rules'class="demo-ruleForm">
				    	<el-form-item prop="account" :rules='rules.r_account1'>
							  <el-input  v-model="fm1.account" autocomplete="off">
							    <template slot="prepend">账号</template>
							  </el-input>
						  </el-form-item>

              <el-form-item prop="psw" :rules='rules.r_psw1'>
                <el-input  v-model="fm1.psw" autocomplete="off" type= 'password'>
                  <template slot="prepend">密码</template>
                </el-input>
              </el-form-item>

              <el-form-item>
                <el-col :span="16" :offset='5'>
                  <el-button type="primary" @click="submitForm('fm1')" style="width: 100%">登录</el-button>
                </el-col>
            </el-form-item>
					</el-form> 
					
			</el-tab-pane>
			   <el-tab-pane :span="12">
			       <span slot="label" ><i class="el-icon-edit-outline"></i> 注册</span>
			        <!-- 注册-->
              <el-form :model="fm2" status-icon  ref="fm2"  :rules='rules' class="demo-ruleForm">
                <el-form-item prop="account" :rules ='rules.r_account2'>
                  <el-input  v-model="fm2.account" autocomplete="off">
                    <template slot="prepend">账号</template>
                  </el-input>
                </el-form-item>

                <el-form-item prop="psw" :rules ='rules.r_psw2'>
                  <el-input  v-model="fm2.psw" autocomplete="off" type= 'password'>
                    <template slot="prepend">密码</template>
                  </el-input>
                </el-form-item>
                <el-form-item prop="email" :rules ='rules.r_email2'>
                  <el-input  v-model="fm2.email" autocomplete="off" >
                    <template slot="prepend">邮箱</template>
                  </el-input>
                </el-form-item>

                <el-form-item>
                  <el-col :span="16" :offset='5'>
                    <el-button type="primary" @click="submitForm('fm2')" style="width: 100%">注册</el-button>
                  </el-col>
              </el-form-item>
            </el-form>
			   </el-tab-pane>
  		</el-tabs>


	</el-col>
	</div>
</template>
<script>
 export default {
    data() {
      return {
      	fm1:{
      		account:'',
      		psw:''
      	},
        fm2:{
          account:'',
          psw:'',
          email:''
        },
        rules:{
            r_account1:{
              required: true, message: '请输入账号', trigger: 'blur'
            },
            r_psw1:{
              required: true, message: '请输入密码', trigger: 'blur'
            },
            r_account2:{
              required: true, message: '请输入账号', trigger: 'blur'
            },
            r_psw2:{
              required: true, message: '请输入密码', trigger: 'blur'
            },
            r_email2:[
              {required: true, message: '请输入密码', trigger: 'blur'},
              {type:'email',message:'请输入正确的邮箱格式',trigger: 'blur'}
            ]
        }
      };
    },
    methods: {
      //表单提交
      submitForm:function(fm){
          if(fm =='fm1'){
              //登录
              this.$http.post('/k/login', {
                  user:this.fm1
              })
              .then(function (response) {
                  console.log(response);

                  //登录成功，获取token  使用vuex保存，作为登录状态和请求凭证
              })
              .catch(function (error) {
                  console.log(error);
              });
          }else{
              //注册
              this.$http.post('/k/register', {
                  register:this.fm2
              })
              .then(function (response) {
                  console.log(response);
              })
              .catch(function (error) {
                  console.log(error);
              });
          }

      }
      
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login-right{
	margin-top: 10%;
}
</style>