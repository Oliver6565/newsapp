<template>
  <div>
      <div class="news">
          <div class="icon">
              <i class="el-icon-arrow-left"></i>
              <i class="el-icon-share"></i>
          </div>
          <div class="main">
              <div class="title">
                  习近平在金砖国家领导人第十三次会晤上的讲话
              </div>
              <div class="time">即时通讯    50分钟前</div>
              <img src="../assets/image/news/news1.svg">
              <div class="content">
                  <div>
                      <strong>习近平：我们将扩大合作空间，加大对共建“一带一路”国家服务业发展的支持，同世界共享中国技术发展成果。</strong>
                  </div><br>
                  <p>各位同事：
当前，新冠肺炎疫情仍在全球肆虐，世界经济复苏艰难曲折，国际秩序演变深刻复杂。面对挑战，金砖国家要展现担当，为世界和平与发展作出积极贡献，推动构建人类命运共同体。
<br>——我们要推动践行真正的多边主义，恪守联合国宪章宗旨和原则，维护以联合国为核心的国际体系和以国际法为基础的国际秩序。
<br>——我们要推动全球团结抗疫，携手应对疫情，坚持科学溯源，反对政治化、污名化，加强联防联控，促进疫苗作为全球公共产品的研发、生产、公平分配。
<br>——我们要推动开放创新增长，助力世界经济平稳复苏，维护展务实合作，推动金砖国家疫苗研发中心在线上尽快启动。要加强传统医药合作，为抗击疫情提供更多手段。</p>
              </div>
          </div>
      </div>
      <div class="comment_box">
          <div><input></div>
          <i class="el-icon-chat-dot-round"></i>
          <i class="el-icon-ship"></i>
          <i class="el-icon-menu"></i>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.news{
    margin:44px 30px 48px;
    .icon{
        i{
            font-weight: bold;
            font-size: 20px;
        }
        i:nth-child(2){
            float: right;
        }
    }
    .main{
        margin: 20px 0;

        .title{
            font-size: 22px;
            font-weight: bold;
            line-height: 30px;
        }
        .time{
            font-size: 14px;
            color: rgb(136, 148, 162);
            margin: 10px 0;
        }
        img{
            border-radius: 10px;
            width: 327px;
            height: 167px;
        }
        .content{
            margin: 20px 0;
            line-height: 22px;
            strong{
                font-weight: bold;
            }
            p{
                color: rgb(38, 38, 46);
            }
        }
    }
}
.comment_box{
    background-color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    input{
        background-color: #F0F0F0;
        width: 100%;
        height: 30px;
        border-radius: 20px;
    }
    i{
        font-size: 24px;
    }
    
}
</style>