<template>
  <div class="bar">
      <div class="icons">
        <div><img @click="toindex" src="../assets/image/icon/home_icon.svg"></div>
        <div><img @click="toVideo" src="../assets/image/icon/play_icon.svg"></div>
        <div><img @click="toProfile" src="../assets/image/icon/profile_icon.svg"></div>
      </div>
  </div>
</template>

<script>
export default {
  methods:{
    toindex(){
      this.$router.push({
        path:"/index"
      })
    },
    toVideo(){
      this.$router.push({
        path:"/Video"
      })
    },
    toProfile(){
      this.$router.push({
        path:'/Profile'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.bar{
  position: fixed;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 60px;
  box-shadow: 0 -4px 15px -2px rgba(160, 159, 159, 0.3); //顶部阴影;
  .icons{
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

</style>>
