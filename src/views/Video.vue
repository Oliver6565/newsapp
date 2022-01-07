<template>
  <div>
      <div class="video">
          <div class="hot_video">
              <div class="title">
                  热门视频
              </div>
              <div class="video_list">
                  <div class="video_box">
                      <img src="">
                      <div class="play_icon"></div>
                  </div>
                  <div class="video_box">
                      <img src="">
                      <div class="play_icon"></div>
                  </div>
                  <div class="video_box">
                      <img src="">
                      <div class="play_icon"></div>
                  </div>
              </div>
          </div>

          <div class="daily_video">
                <div class="title">
                    每日推荐
                </div>
                <div class="video_list">
                    <div class="video_box">
                        <img src="">
                        <div class="play_icon"></div>
                    </div>
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
.video{
    margin:44px 30px 34px;
    .hot_video{
        .title{
            font-size: 20px;
            font-weight: bold;
        }
        .video_list{
            width: 100%;
            margin: 20px 0;
            display: flex;
            overflow: scroll;
            .video_box{
                border: 1px solid red;
                margin-right: 20px;
                img{
                    width: 280px;
                    height: 170px;
                }
            }
        }

    }
    .daily_video{
        .title{
            font-size: 20px;
            font-weight: bold;
        }
        // 瀑布流
    }
}
</style>