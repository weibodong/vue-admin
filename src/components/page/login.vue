<template>
  <div class="login-wrap">
    <div class="ms-title">后台管理系统</div>
    <div class="ms-login">
      <el-form :model="userInfo" ref="userInfo" :rules="rules" label-width="50px" class="demo-ruleForm">
        <el-form-item label="账号" prop="userName">
          <el-input type="text" v-model.number="userInfo.userName" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userpassword">
          <el-input type="text" v-model.number="userInfo.userpassword" placeholder="请输入账号"></el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('userInfo')">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        userInfo: {
          userName: '',
          userpassword:'',
          userImg:'http://dayu.oa.com/avatars/v_weieili/avatar.jpg'
        },
        rules:{
          userName:[
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          userpassword:[
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        let self = this
        self.$refs[formName].validate((valid) => {
          if (valid) {
            localStorage.setItem('userInfo',JSON.stringify(self.userInfo));
            self.$router.push('/basetable');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
  }
</script>
<style scoped>
.login-wrap{
  position: relative;
  width:100%;
  height:100%;
}
  .ms-title{
    position: absolute;
    top:50%;
    width:100%;
    margin-top: -230px;
    text-align: center;
    font-size:30px;
    color: #fff;
  }
.ms-login{
  position: absolute;
  left:50%;
  top:50%;
  width:300px;
  height:160px;
  margin:-150px 0 0 -190px;
  padding:40px;
  border-radius: 5px;
  background: #fff;
}
.login-btn{
  text-align: center;
}
.login-btn button{
  width:100%;
  height:36px;
}
</style>
