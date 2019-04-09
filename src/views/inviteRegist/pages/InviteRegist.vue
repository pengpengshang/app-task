<template>
  <div class="invite-regist">

    <div style="background-color: white">
      <!--条管家邀请logo-->
      <!--<div class="invite-logo">-->
        <!--<img src="../../../assets/task-invite-logo.png" width="100%"/>-->
      <!--</div>-->
      <!--<p class="app-name">条管家</p>-->


      <!--&lt;!&ndash;分享界面中间样式&ndash;&gt;-->
      <!--<div class="invite-middle" :class="{iosClass:iosFlag}">-->
        <!--<van-row>-->
          <!--<van-col :span="1" class="left-line"></van-col>-->
          <!--<van-col :offset="2" :span="21" class="right-main">-->
            <!--&lt;!&ndash;实名认证&ndash;&gt;-->
            <!--<van-row>-->
              <!--<van-col :span="1">-->
                <!--<div class="left-point"></div>-->
                <!--<div class="left-line-middle"></div>-->
              <!--</van-col>-->
              <!--<van-col :span="18">-->
                <!--<p class="title-name">实名认证</p>-->
                <!--<p class="title-info">实名认证、数字证书</p>-->
              <!--</van-col>-->
              <!--<van-col :span="3" class="title-img">-->
                <!--<img src="../../../assets/real-name.png" width="100%"/>-->
              <!--</van-col>-->
            <!--</van-row>-->
            <!--&lt;!&ndash;CA证书&ndash;&gt;-->
            <!--<van-row>-->
              <!--<van-col :span="1">-->
                <!--<div class="left-point"></div>-->
                <!--<div class="left-line-middle"></div>-->
              <!--</van-col>-->
              <!--<van-col :span="18">-->
                <!--<p class="title-name">CA证书</p>-->
                <!--<p class="title-info">多方签署，安全便捷</p>-->
              <!--</van-col>-->
              <!--<van-col :span="3" class="title-img">-->
                <!--<img src="../../../assets/CA-img.png" width="100%"/>-->
              <!--</van-col>-->
            <!--</van-row>-->

            <!--&lt;!&ndash;调解法庭&ndash;&gt;-->
            <!--<van-row>-->
              <!--<van-col :span="1">-->
                <!--<div class="left-point"></div>-->
                <!--<div class="left-line-middle"></div>-->
              <!--</van-col>-->
              <!--<van-col :span="18">-->
                <!--<p class="title-name">调解法庭</p>-->
                <!--<p class="title-info">线上法庭，高效有力</p>-->
              <!--</van-col>-->
              <!--<van-col :span="3" class="title-img">-->
                <!--<img src="../../../assets/jiami-suanfa.png" width="100%"/>-->
              <!--</van-col>-->
            <!--</van-row>-->
            <!--&lt;!&ndash;加密算法&ndash;&gt;-->
            <!--<van-row>-->
              <!--<van-col :span="1">-->
                <!--<div class="left-point"></div>-->
                <!--<div class="left-line-middle"></div>-->
              <!--</van-col>-->
              <!--<van-col :span="18">-->
                <!--<p class="title-name">加密算法</p>-->
                <!--<p class="title-info">文件加密防篡改</p>-->
              <!--</van-col>-->
              <!--<van-col :span="3" class="title-img">-->
                <!--<img src="../../../assets/law-img.png" width="100%"/>-->
              <!--</van-col>-->
            <!--</van-row>-->

            <!--&lt;!&ndash;律师团队&ndash;&gt;-->
            <!--<van-row>-->
              <!--<van-col :span="1">-->
                <!--<div class="left-point"></div>-->
                <!--<div class="left-line-middle"></div>-->
              <!--</van-col>-->
              <!--<van-col :span="18">-->
                <!--<p class="title-name">律师团队</p>-->
                <!--<p class="title-info">e律师联盟万人团队</p>-->
              <!--</van-col>-->
              <!--<van-col :span="3" class="title-img">-->
                <!--<img src="../../../assets/law-team.png" width="100%"/>-->
              <!--</van-col>-->
            <!--</van-row>-->
          <!--</van-col>-->
        <!--</van-row>-->
        <!--&lt;!&ndash;底部备注提示信息&ndash;&gt;-->
        <!--<van-row class="invite-remark">-->
          <!--<p>-->
            <!--手机尾号{{mobile}}的用户邀请你注册，全国首家C2C的借条借款存证平台，专业的&#91借条/收条]电子签约一站式维权存证平台；针对债务合同的特性，从风险防范告知，到合同的签署，再到合同履行的跟踪，以及最终的执行！</p>-->
        <!--</van-row>-->
      <!--</div>-->






      <!--新版修改界面-->
      <div class="invite-top">
        <div class="task-logo">
          <img src="../../../assets/task-logo.png" width="100%"/>
        </div>
        <div class="task-logo-name">
          <img src="../../../assets/task-logo-name.png" width="100%" />
        </div>
        <div class="task-logo-info">
          <img src="../../../assets/baizhiheizi.png" width="49%" />
          <img src="../../../assets/youliyouju.png" width="49%" />
        </div>
      </div>


      <!--中间介绍-->
      <div class="invite-middle-info">
        <p>国内首家第三方中立的债务签约与服务平台</p>
      </div>


      <!--下载并注册按钮-->
      <div class="down-app-regist">
        <!--<button @click="downAndRegist">下载并注册</button>-->
        <img src="../../../assets/task-invite-download.png" @click="downAndRegist" width="100%" />
      </div>


      <!--提示信息-->
      <p class="invite-tips"><span>手机尾号{{mobile}}</span>的用户邀请您注册参与积分抽奖</p>


      <!--底部手机图片-->
      <div style="position: relative;">
        <div class="task-bottom-img">
          <img src="../../../assets/task-invite.png" width="100%" />
        </div>

        <!--右侧中部图片-->
        <div class="right-middle-img">
          <img src="../../../assets/right-middle-img.png" width="100%">
        </div>
      </div>





    </div>

    <!--分享界面底部按钮-->
    <!--<div class="invite-bottom-button">-->
      <!--<van-button type="default" class="download-button" @click="downAndRegist">下载并注册</van-button>-->
    <!--</div>-->


    <!--右上角图片-->
    <div class="top-right-img">
      <img src="../../../assets/right-top-img.png" width="100%"/>
    </div>

    <!--左侧中部图片-->
    <div class="left-middle-img">
      <img src="../../../assets/left-middle-img.png" width="100%">
    </div>





  </div>
</template>

<script>

  import utils from '../../../common/utils'

  export default {
    name: "InviteRegist",

    data() {
      return {
        showId: '',                                 //分享用户的showID
        mobile: '',                                 //分享用户的手机尾号
        timeStamp: '',                              //分享的时间戳
        textContent: '',                            //剪切板信息
        iosFlag: false,                              //是否是iOS
      }
    },

    created() {

    },

    mounted() {
      document.title = '条管家分享';
      this.showId = utils.getQuery('showId');
      this.mobile = utils.getQuery('mobile').substr(7, 11);
      this.timeStamp = utils.getQuery('time');
      this.iosFlag = utils.checkPhoneIsIos();
    },

    methods: {


      /**
       * 点击复制到剪切板
       */
      downAndRegist: function () {
        utils.copyContent('【条管家】¥02' + this.showId + '#' + this.timeStamp + '¥');
        setTimeout(() => {
          const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
          window.scrollTo(0, Math.max(scrollHeight - 1, 0));
        }, 2);
        window.location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.hm.iou';
      },

    }

  }
</script>

<style scoped lang="less">

  .invite-regist {
    /*padding-top: 48px;*/
    height: 100%;
    background-color: white;
    box-sizing: border-box;

    /*.invite-logo {*/
      /*width: 200px;*/
      /*height: 200px;*/
      /*display: block;*/
      /*margin: auto;*/
    /*}*/

    /*.app-name {*/
      /*color: #596881;*/
      /*font-size: 48px;*/
      /*text-align: center;*/
      /*font-weight: 600;*/
    /*}*/

    /*.invite-middle {*/
      /*width: 90%;*/
      /*height: auto;*/
      /*left: 5%;*/
      /*display: block;*/
      /*margin: 28px auto 206px auto;*/
      /*background-image: url("../../../assets/invite-middle-img.png");*/
      /*background-size: 100% 100%;*/
      /*background-repeat: no-repeat;*/
      /*position: relative;*/
      /*z-index: 9;*/
      /*overflow-y: scroll;*/
      /*display: inline-block;*/

      /*.left-line {*/
        /*width: 12px;*/
        /*height: 60px;*/
        /*background: rgba(140, 156, 183, 1);*/
        /*border-radius: 2px;*/
        /*position: relative;*/
        /*top: 42px;*/
      /*}*/

      /*.right-main {*/
        /*padding-top: 58px;*/

        /*.left-point {*/
          /*width: 20px;*/
          /*height: 20px;*/
          /*background: rgba(140, 156, 183, 1);*/
          /*border-radius: 50%;*/
        /*}*/

        /*.left-line-middle {*/
          /*border-right: 2px solid #8C9CB7;*/
          /*width: 2px;*/
          /*height: 140px;*/
          /*position: relative;*/
          /*left: 8px;*/
        /*}*/

        /*.title-name {*/
          /*font-size: 36px;*/
          /*color: #575B62;*/
          /*padding-left: 20px;*/
          /*font-weight: 600;*/
        /*}*/

        /*.title-info {*/
          /*font-size: 28px;*/
          /*color: #979EB1;*/
          /*padding: 12px 0 0 20px;*/
        /*}*/

        /*.title-img {*/
          /*width: 92px;*/
          /*height: 92px;*/
        /*}*/
      /*}*/

      /*.invite-remark {*/
        /*width: 612px;*/
        /*height: auto;*/
        /*background: rgba(140, 156, 183, 1);*/
        /*border-radius: 8px;*/
        /*display: block;*/
        /*margin: auto;*/
        /*padding: 22px 28px;*/
        /*color: white;*/
        /*font-size: 28px;*/
        /*line-height: 1.5;*/
        /*box-sizing: border-box;*/
        /*margin-bottom: 50px;*/
        /*text-align: justify;*/
      /*}*/
    /*}*/



    /*.invite-bottom-button {*/
      /*position: fixed;*/
      /*bottom: 0;*/
      /*width: 100%;*/
      /*height: 176px;*/
      /*background-color: rgba(246, 246, 246, .9);*/
      /*display: flex;*/
      /*border-top: 1px solid #E6E6E6;*/
      /*z-index: 10;*/

      /*.download-button {*/
        /*width: 598px;*/
        /*height: 96px;*/
        /*background: linear-gradient(90deg, rgba(255, 228, 149, 1) 0%, rgba(255, 186, 90, 1) 100%);*/
        /*box-shadow: 0px 6px 12px 0px rgba(255, 231, 194, 1);*/
        /*border-radius: 48px;*/
        /*display: block;*/
        /*margin: auto;*/
        /*font-size: 36px;*/
        /*color: #111111;*/
      /*}*/
    /*}*/


    .top-right-img {
      width: 246px;
      height: 128px;
      position: absolute;
      right: 0;
      top: 0;
    }

    .left-middle-img {
      width: 90px;
      height: 312px;
      position: absolute;
      left: 0;
      top: 420px;
      z-index: 0;
    }


  }



  .invite-top{
    padding-top: 98px;
    .task-logo{
      width: 120px;
      height: 120px;
      display: block;
      margin: auto;
    }
    .task-logo-name{
      width: 210px;
      height: 62px;
      display: block;
      margin: auto;
      padding-top: 28px;
    }
    .task-logo-info{
      width: 230px;
      height: 28px;
      display: block;
      margin: auto;
      display: flex;
      justify-content: space-between;
      padding-top: 16px;
    }
  }

  .invite-middle-info{
    width: 578px;
    height: 76px;
    display: block;
    margin: auto;
    background-image: url("../../../assets/task-info-backimg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: 28px;
    color: #67799B;
    text-align: center;
    position: relative;
    z-index: 99;
    line-height: 76px;
    margin-top: 32px;
  }

  .down-app-regist{
      width:350px;
      height:138px;
      display: block;
      margin: 64px auto 24px auto;
  }

  .invite-tips{
    font-size: 24px;
    color: #BA9479;
    text-align: center;
    span{
      text-decoration: underline;
    }
  }

  .task-bottom-img{
    width: 562px;
    height: 676px;
    display: block;
    margin: 60px auto 0 auto;
    position: relative;
    z-index: 99;
  }

  .right-middle-img {
    width: 178px;
    height: 392px;
    position: absolute;
    right: 0;
    bottom: 0px;
    z-index: 0;
  }


</style>
