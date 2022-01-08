<template>
  <div>
      <div class="video">
          <div class="hot_video">
              <div class="title">
                  热门视频
              </div>
              <div class="video_list">
                  <div class="video_box">
                      <img src="../assets/image/playvideo/img2.png">
                      <div class="play_icon"></div>
                  </div>
                  <div class="video_box">
                      <img src="../assets/image/news/news1.svg">
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
                        <img src="../assets/image/playvideo/img1.png">
                        <div class="play_icon"></div>
                        <div class="text">中国5G基站数占全球的70%终端数占全群的...</div>
                        <div class="time">即时通讯    50分钟前</div>
                        <div class="like">112</div>
                    </div>
                    <div class="video_box">
                        <img src="../assets/image/playvideo/img3.png">
                        <div class="play_icon"></div>
                        <div class="text">中国5G基站数占全球的70%终端数占全群的...</div>
                        <div class="time">即时通讯    50分钟前</div>
                        <div class="like">112</div>
                    </div>
                    <div class="video_box">
                        <img src="../assets/image/playvideo/img2.png">
                        <div class="play_icon"></div>
                        <div class="text">中国5G基站数占全球的70%终端数占全群的...</div>
                        <div class="time">即时通讯    50分钟前</div>
                        <div class="like">112</div>
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
    margin:44px 30px 74px;
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
                margin-right: 20px;
                img{
                    // 高度要一致
                    height: 170px;
                    border-radius: 10px;
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
        .video_list{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin: 20px 0;
            .video_box{
                width: 148px;
                img{
                    // 宽度要一致 高度随意
                    width: 100%;
                    border-radius: 10px;
                }
                .text{
                    margin: 5px;
                    line-height: 18px;
                    font-size: 14px;
                    height: 36px;
                    overflow: hidden;
                }
                .time{
                    display: inline-block;
                    margin: 0 5px;
                    font-size: 12px;
                    color: rgb(136, 148, 162);
                }
                .like{
                    font-size: 12px;
                    float: right;
                }
            }
        }
    }
}
</style>