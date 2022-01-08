<template>
  <div>
      <div class="profile">
          <div class="info_box">
              <i class="el-icon-setting"></i>          
              <div class="info">
                  <img src="../assets/image/avatar.svg">
                  <div class="text">
                    <div class="name">史世铭</div>
                    <div class="signature">不用削皮去籽的小黄瓜，一口甜进心里 不用削皮去籽的小黄瓜，一口甜进心里</div>
                  </div>
              </div>
              <div class="record">
                  <div>发表<br><b>289</b></div>
                  <div>关注<br><b>186</b></div>
                  <div>粉丝<br><b>5635</b></div>
              </div>
          </div>
          <div class="followers">
              <div class="title">最新粉丝</div>
              <div class="avatar_list">
                <img src="../assets/image/avatar2.svg">
                <img src="../assets/image/avatar3.svg">
                <img src="../assets/image/avatar4.svg">
                <img src="../assets/image/avatar5.svg">
                <img src="../assets/image/avatar6.svg">
                <img src="../assets/image/avatar4.svg">
              </div>     
          </div>
          <div class="collection">
              <div class="title">收藏喜欢</div>
              <div class="video_list">
                  <img src="../assets/image/playvideo/img1.png">
                  <img src="../assets/image/playvideo/img3.png">
                  <img src="../assets/image/playvideo/img2.png">
              </div>
          </div>
      </div>
      <Bar></Bar>
  </div>
</template>

<script>
import Bar from '../components/bar.vue'
export default {
    components:{
        Bar
    }
}
</script>

<style lang="less" scoped>
.profile{
    margin:44px 30px 74px;
    position: relative;
    .info_box{
        i{
            font-size: 20px;
            color:rgb(38, 38, 46);
            position: absolute;
            right: 0;
        }
        .info{
            width: 100%;
            padding-top: 20px;
            display: flex;
            img{
                width: 50px;
                height: 50px;
            }
            .text{
                padding: 5px 10px;
                .name{
                    font-weight: bold;
                    margin-bottom: 10px;
                }
                .signature{
                    font-size: 14px;
                    color:rgb(38, 38, 46);
                    width: 100%;
                    height: 14px;
                    overflow: hidden;
                }
            }
        }
    }
    .record{
        padding: 20px 0;
        display: flex;
        justify-content: space-evenly;
        line-height: 22px;
        text-align: center;

        border-bottom:1px solid rgb(237, 237, 237);
        b{
            font-weight: bold;
            font-size: 18px;
        }
    }
    .followers{
        width: 100%;
        margin: 20px 0 40px;
        .avatar_list{
            margin: 15px 0;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            img{
                margin-right: 15px;
                width: 48px;
                height: 48px;
            }
        }
    }
    .collection{
        width: 100%;
        .video_list{
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            img{
                width: 148px;
                margin-top: 15px;
            }
        }
    }
}
</style>