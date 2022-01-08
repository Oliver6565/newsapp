<template>
<div>
  <div class="index">
      <div class="search">
         <el-input
                placeholder="习近平在金砖国家领导人第十三次会晤..."
                prefix-icon="el-icon-search"
                v-model="input">
         </el-input>
         <div class="avatar"><img src="../assets/image/avatar.svg"></div>
      </div>
      <div class="main">
          <div class="title">即时咨讯</div>
          <div class="news_list">
              <div class="news" @click="toNews">
                  <img src="../assets/image/bg/news_img1.svg">
                  <div class="content">
                    <div class="news_avatar"><img src="../assets/image/bg/news_avatar1.svg"></div>
                    <div><div class="news_title">即时咨讯</div>
                    <div class="news_time">5分钟前</div></div>
                  </div>
              </div>
              <div class="news">
                  <img src="../assets/image/bg/news_img2.svg">
                  <div class="content">
                    <div class="news_avatar"><img src="../assets/image/bg/news_avatar2.svg"></div>
                    <div>
                        <div class="news_title">即时咨讯</div>
                        <div class="news_time">15分钟前</div>
                    </div>
                  </div>
              </div>
              <div class="news">
                  <img src="../assets/image/bg/news_img3.svg">
                   <div class="content">
                        <div class="news_avatar"><img src="../assets/image/bg/news_avatar3.svg"></div>
                        <div><div class="news_title">即时咨讯</div>
                        <div class="news_time">1小时前</div></div>
                  </div>
              </div>
          </div>
          <div class="title">今日看点</div>
          <div class="typebar">
              <ul>
                <li>热门</li>
                <li>抗议</li>
                <li>视频</li>
                <li>美食</li>
                <li>娱乐</li>
              </ul>
          </div>
          <div class="today_news_list">
              <div class="news_box">
                  <div><img src="../assets/image/news/todaynews1.svg"></div>
                  <div>
                    <div class="tag"># 5G时代</div>
                    <p>在2021年中国国际服务贸易交易会全球服务贸易峰会上的致辞</p>
                    <div class="time">即时通讯    50分钟前</div>
                  </div>
              </div>
              <div class="news_box">
                  <div><img src="../assets/image/news/todaynews2.svg"></div>
                  <div>
                    <div class="tag"># 共同富裕</div>
                    <p>习近平在金砖国家领导人第十三次会晤上的讲话</p>
                    <div class="time">即时通讯    50分钟前</div>
                  </div>
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
    components: {
      Bar
    },
    data(){
        return{
            input:''
        }
    },
    methods:{
        toNews(){
            this.$router.push('/News')
        }
    }
}
</script>

<style lang="less" scoped>
.index{
    margin:44px 30px 74px;
    // height: 734px;
    .search{
        width: 100%;
        height: 44px;
        margin-bottom: 20px;
        .el-input{
            width: 80%;
            display: inline-block;
            font-size: 14px;
        }
        .avatar{
            width: 10%;
            height: 32px;
            margin-left: 10%;
            display: inline-block;
        }
    }
    .main{
        width: 100%;
        .title{
            font-size: 20px;
            font-weight: bold;
        }
        .news_list{
            width: 100%;
            height:170px ;
            overflow: scroll;
            margin: 20px 0px;
            display: flex;
            flex-wrap: nowrap;
            .news{
                position: relative;
                margin: 0 10px 0 0;
                width: 128px;
                height: 170px;
                img{
                    width: 128px;
                    height: 170px;
                    border-radius: 0 0 10px 10px;
                }
                .content{
                    position: absolute;
                    bottom: 20px;
                    color: #fff;
                    display: flex;
                    margin: 0 10px;
                    font-size: 14px;
                    .news_avatar{
                        margin-right: 10px;
                        img{
                            width: 32px;
                            height: 32px;
                        }
                    }
                    .news_title{
                        height: 14px;
                        overflow: hidden;
                        font-weight: bold;
                    }
                    .news_time{
                        margin-top: 6px;
                        font-size: 12px;
                    }
                }
            }
        }

        .typebar{
            width: 100%;
            height: 20px;
            ul{
                margin-top: 10px;
                li{
                    font-size: 14px;
                    border-radius: 5px;
                    padding: 5px 10px;
                    border: 1px solid #8894A2;
                    float: left;
                    margin-right: 10px;
                }
                li:hover{
                    color: #fff;
                    background: #000;
                }
            } 
        }
        
        .today_news_list{
            padding: 10px;
            .news_box{
                margin: 10px 0;
                display: flex;
                align-items: center;
                img{
                    width: 72px;
                    height: 90px;
                    border-radius: 10px;
                }
                div:nth-child(2){
                    padding-left: 10px;
                }
                p{
                    margin: 10px 0;
                    line-height: 20px;
                    height: 40px;
                    overflow: hidden;
                }
                .tag ,.time{
                    font-size: 14px;
                    color: rgb(136, 148, 162);
                }
            }
        }
    }
}
</style>