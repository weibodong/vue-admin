<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <el-col :span="10" class="systitel" :class="isWidthChange?'widht60':'widht230'">
            <div>{{isWidthChange?'':sysmes}}</div>
          </el-col>
          <el-col :span="10">
            <div class="menuwrap" @click="menu"><i class="menu el-icon-menu"></i></div>
          </el-col>
          <el-col :span="4" class="userInfo">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link username">
                <img class="userImg" :src="userInfo.userImg" alt="">
                {{userInfo.userName}}
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的信息</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        sysmes: 'VUEADMIN',
        isLoading:false
      }
    },
    props:{
      isWidthChange: {
        type: Boolean,
        default: false
      }
    },
    computed:{
      userInfo(){
        let useInfo = localStorage.getItem('userInfo')
        return JSON.parse(useInfo)
      }
    },
    methods:{
      handleCommand(command){
        this.isLoading = true
        if(command=='loginout'){
            this.isLoading = false
            localStorage.removeItem('userInfo')
            this.$router.push('/login');
        }
      },
      menu(){
        this.isWidthChange = !this.isWidthChange
      }
    }
  }
</script>
<style scoped>
  .grid-content {
    height: 60px;
    line-height: 60px;
    background: #2E363F;
    color: #fff;
  }
  .systitel {
    padding-left: 35px;
    font-size: 22px;
    border-right:1px solid rgba(238,241,146,0.3);
  }
  .widht60{
    width:60px;
    height:60px;
  }
  .widht230{
    width:230px;
    height:60px;
  }
  .menuwrap {
    padding: 0px 23px;
    width: 30px;
    height: 60px;
    line-height: 60px;
    cursor: pointer;
  }
  .menu {
    font-size: 30px;
    vertical-align: middle;
  }
  .el-dropdown-link {
    color: #fff;
  }
  .userImg {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }
  .username{
    font-size: 18px;
    marign-right:10px;
  }
  .userInfo {
    text-align: right;
    float: right;
    padding-right: 35px;
  }
</style>
