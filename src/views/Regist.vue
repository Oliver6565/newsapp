<template>
  <div class="regist">
      <div class="info_box">
        <div class="title">即时资讯</div>
        <div class="content">24小时热门资讯，带您了解全球最新动态</div>
        <i class="el-icon-close" @click="toLogin"></i>
      </div>

      <div class="main">
        <div class="title">一键登录，更方便快捷</div>
        <div class="phonenumber">131 **** 1234</div>
        <button>使用本机号码一键登录</button>
        <div class="switch">切换手机号</div>
        <el-divider content-position="center">or</el-divider>
        <div class="icon">
            <div><img src="../assets/image/icon/facebook.svg"></div>
            <div><img src="../assets/image/icon/google.svg"></div>
            <div><img src="../assets/image/icon/github.svg"></div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Login',

    methods:{
        toLogin(){
            this.$router.push({
                path:"/"
            })
        }
    }
}
</script>

<style lang="less" scoped>
.regist{
    padding-top: 44px;
    width: 375px;
    height: 768px;
    background-color: #433FFA;
    background-image: url('../assets/image/regist_bg.svg');
    background-repeat: no-repeat;
    background-position: 196px 0;


    .info_box{      
        height: 130px;
        margin-top: 70px;
        padding: 0 30px;
        color: #fff;
        position: relative;
        .title{
            font-size: 32px;
            font-weight: bold;
        }
        .content{
            font-size: 14px;
            line-height: 40px;
        }
        .el-icon-close{
            font-size: 24px;
            position: absolute;
            top: -3rem;
            right: 30px;
        }
    }
    .main{
        width: 100%;
        height: 568px;
        background-color: #fff;
        border-radius: 50px 50px 0 0;
        text-align: center;
        .title{
            font-size: 18px;
            padding: 64px 0 44px;
        }
        .phonenumber{
            font-weight: bold;
            font-size: 18px;
        }
        button{
            width: 275px;
            height: 44px;
            margin:20px 0;
            color: #fff;
            background-color:#5252FA;
            border-radius:32px ;
            border: none;
            font-size: 16px;
        }
        .switch{
            color: #5252FA;
        }
        .el-divider{
            width: 275px;
            margin: 80px auto 60px;
            background-color:#E8E8E8 ;
        }
        .icon{
            margin: 20px 0;
            display: flex;
            justify-content: center;
            img{
                width: 40px;
                height: 40px;
            }
            div{
                margin: 0 20px;
            }
        }
    }
}
</style>