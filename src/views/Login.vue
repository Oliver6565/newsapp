<template>
  <div class="login">
    <div class="info_box">
      <div class="title">即时资讯</div>
      <div class="content">24小时热门资讯，带您了解全球最新动态，随时了解实时资讯，内容丰富，满足您各领域的信息资讯，使用起来吧</div>
      <div class="button_box">
        <div><button @click="toRegist">注册 </button></div>
        <div><button @click="toindex">登陆 </button></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Login',

  methods:{
    toRegist(){
      this.$router.push({
        path:'/Regist'
      })
    },
    toindex(){
      this.$router.push({
        path:'/index'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.login{
  width: 375px;
  height: 812px;
  background-image: url('../assets/image/login_bg.png');
  background-size: 375px 812px;
  background-repeat: no-repeat;
  .info_box{
    width: 327px;
    height: 197px;
    position: absolute;
    bottom: 62px;
    // 375-327 = 48px
    // 48/2 = 24px
    left: 24px;

    .title{
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }
    .content{
      color: #fff;
      width: 327px;
      line-height: 24px;
      margin:20px 0 40px 0; 
    }
  }
  .button_box{
    display: flex;
    justify-content: center;
    button{
      margin:0 15px;
      width: 150px;
      height: 38px;
      border-radius: 25px;
      // border: none;
      border-color: rgb(82, 82, 250);
    }
    div:first-child{
      button{
        color: rgb(82, 82, 250);
        // 可以使得button按钮背景变透明; 两种都可以
        // background:none;
           background-color: transparent;
      }
    }
    div:last-child{
      button{
        color: #fff;
        background-color: rgb(82, 82, 250);
      }
    }
  }
}

</style>
