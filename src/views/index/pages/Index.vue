<template>

  <div class="task-index">

    <!--首页顶部信息-->
    <van-row class="index-top-info">
      <van-col :span="4">
        <div class="user-head">
          <img :src="userHeadImg" width="100%"/>
        </div>

      </van-col>
      <van-col :span="14">
        <p class="top-point"><span>{{userAllPint}}</span>积分</p>
        <p class="sign-day">已连续签到<span>{{signCount}}</span>天</p>
      </van-col>
      <van-col :span="6">
        <div class="user-sign" @click="sighFinish" v-if="signFinishTodayFlag">
          <img src="../../../assets/task-sign-finish.png" width="100%"/>
        </div>
        <div class="user-sign" @click="userSign" v-if="!signFinishTodayFlag">
          <img src="../../../assets/task-sign.png" width="100%"/>
        </div>
      </van-col>
    </van-row>

    <!--签到列表-->
    <div class="_sign-list">
      <div v-for="(item, index) in 7">
        <div :span="2" class="sign-one">
          <p class="sign-point" v-if="index > signCount -1">+{{signPoint[index]}}</p>
          <p class="sign-point-active" v-if="index <= signCount -1">+{{signPoint[index]}}</p>
          <p class="sign-time" :class="{signTimeActive:(index <= signCount -1)}">{{index+1}}天</p>
          <div v-if="index <= signCount -1" class="sign-already">
            <img src="../../../assets/blue-yes.png" width="100%"/>
          </div>

        </div>
        <div :span="1" class="sign-line" v-if="index != 6"></div>
      </div>
    </div>


    <!--抽奖-->
    <div class="index-turn">
      <div class="index-turn-inside">
        <div class="inside-round">
          <!--顶部抽奖奖品-->
          <van-row class="award-list-top">
            <div class="award-one" :class="{awardActive:awardActive==1}">
              <div class="award-one-img">
                <img src="../../../assets/task-seal.png" width="100%"/>
              </div>

              <p>限时签章1枚</p>
            </div>
            <div class="award-one" :class="{awardActive:awardActive==2}">
              <div class="award-one-img">
                <img src="../../../assets/task-san.png" width="100%"/>
              </div>
              <p>限量雨伞</p>
            </div>
            <div class="award-one" :class="{awardActive:awardActive==3}">
              <div class="award-one-img">
                <img src="../../../assets/point-one.png" width="100%"/>
              </div>
              <p>10积分</p>
            </div>
          </van-row>
          <!--中间抽奖奖品-->
          <van-row class="award-list-top award-list-middle">
            <div class="award-one" :class="{awardActive:awardActive==8}">
              <div class="award-one-img">
                <img src="../../../assets/task-cup.png" width="100%"/>
              </div>

              <p>限量保温杯</p>
            </div>
            <div class="start-round" @click="startRound">
              <img src="../../../assets/task-choujiang.png" width="100%"/>
            </div>
            <div class="award-one" :class="{awardActive:awardActive==4}">
              <div class="award-one-img">
                <img src="../../../assets/task-seal.png" width="100%"/>
              </div>
              <p>限时签章1枚</p>
            </div>

          </van-row>
          <!--底部抽奖奖品-->
          <van-row class="award-list-top award-list-middle">
            <div class="award-one" :class="{awardActive:awardActive==7}">
              <div class="award-one-img">
                <img src="../../../assets/point-two.png" width="100%"/>
              </div>
              <p>30积分</p>
            </div>
            <div class="award-one" :class="{awardActive:awardActive==6}">
              <div class="award-one-img">
                <img src="../../../assets/task-thanks.png" width="100%"/>
              </div>
              <p>谢谢惠顾</p>
            </div>
            <div class="award-one" :class="{awardActive:awardActive==5}">
              <div class="award-one-img">
                <img src="../../../assets/point-three.png" width="100%"/>
              </div>
              <p>50积分</p>
            </div>
          </van-row>
        </div>
      </div>
    </div>


    <!--代发货奖品-->
    <p class="wait-send-award" @click="toWaitSendAwardPage">待发货奖品></p>


    <!--右侧中间的图片-->
    <div class="right-middle-img">
      <img src="../../../assets/index-right-middle.png" width="100%"/>
    </div>

    <!--任务列表-->
    <div class="task-all-list">
      <!--邀请好友注册任务-->
      <van-row class="task-invite" @click.native="invireUserRegist">
        <van-col :span="2" class="left-line"></van-col>
        <van-col :span="14" class="task-info">邀请1位好友注册</van-col>
        <van-col :span="6" class="task-award">+20积分</van-col>
        <van-col :span="2">
          <div class="task-right-icon">
            <img src="../../../assets/task-right.png" width="100%"/>
          </div>
        </van-col>
      </van-row>

      <!--完成一份合同签署任务-->
      <!--<van-row class="task-invite">-->
      <!--<van-col :span="2" class="left-line"></van-col>-->
      <!--<van-col :span="14" class="task-info">完成1份合同签署</van-col>-->
      <!--<van-col :span="6" class="task-award">+10积分</van-col>-->
      <!--<van-col :span="2">-->
      <!--<div class="task-right-icon">-->
      <!--<img src="../../../assets/task-right.png" width="100%"/>-->
      <!--</div>-->

      <!--</van-col>-->
      <!--</van-row>-->

      <!--实名认证成功任务-->
      <van-row class="task-invite" @click.native="toAppRealName">
        <van-col :span="2" class="left-line"></van-col>
        <van-col :span="14" class="task-info">实名认证成功</van-col>
        <!--任务完成展示样式-->
        <van-col :span="2" :offset="5" v-if="realNameFlag">
          <div class="task-finish">
            <img width="100%" src="../../../assets/yello-yes.png"/>
          </div>
        </van-col>
        <!--任务未完成展示样式-->
        <van-col :span="6" v-if="!realNameFlag" class="task-award">+50积分</van-col>
        <van-col :span="2" v-if="!realNameFlag">
          <div class="task-right-icon">
            <img width="100%" src="../../../assets/task-right.png"/>
          </div>
        </van-col>
      </van-row>


      <!--首次绑定邮箱任务-->
      <van-row class="task-invite" @click.native="bindUserEmail">
        <van-col :span="2" class="left-line"></van-col>
        <van-col :span="14" class="task-info">首次绑定邮箱</van-col>
        <!--任务完成展示样式-->
        <van-col :span="2" :offset="5" v-if="bindEmail">
          <div class="task-finish">
            <img width="100%" src="../../../assets/yello-yes.png"/>
          </div>

        </van-col>
        <!--任务未完成展示样式-->
        <van-col :span="6" v-if="!bindEmail" class="task-award">+10积分</van-col>
        <van-col :span="2" v-if="!bindEmail">
          <div class="task-right-icon">
            <img width="100%" src="../../../assets/task-right.png"/>
          </div>

        </van-col>
      </van-row>


      <!--首次绑定绑定银行卡-->
      <van-row class="task-invite" @click.native="bindUserBankCard">
        <van-col :span="2" class="left-line"></van-col>
        <van-col :span="14" class="task-info">首次绑定银行卡</van-col>
        <!--任务完成展示样式-->
        <van-col :span="2" :offset="5" v-if="bindBankCard">
          <div class="task-finish">
            <img width="100%" src="../../../assets/yello-yes.png"/>
          </div>

        </van-col>
        <!--任务未完成展示样式-->
        <van-col :span="6" v-if="!bindBankCard" class="task-award">+30积分</van-col>
        <van-col :span="2" v-if="!bindBankCard">
          <div class="task-right-icon">
            <img width="100%" src="../../../assets/task-right.png"/>
          </div>

        </van-col>
      </van-row>

    </div>


    <!--首页抽奖弹窗-->
    <base-pop :awardNum="prizeType" :showFlag="popShowFlag"></base-pop>


    <!--添加界面透明蒙层，防止界面按钮的多次重复点击-->
    <div class="avoid-fast-click" v-if="fastClickFlag" @touchmove.prevent></div>


  </div>

</template>

<script>

  import appWebview from '../../../common/appWebView'
  import global from '../../../global/config'
  import signApi from '../../../api/sign-task'
  import BasePop from '../../../components/BasePop'
  import axios from 'axios'
  import utils from '../../../common/utils'

  export default {
    name: "Index",

    components: {
      BasePop
    },

    data() {
      return {
        signPoint: [5, 10, 15, 20, 30, 40, 60],                 //积分奖励
        signCount: 0,                                           //累计签到次数
        awardActive: 0,                                         //抽奖选中奖品的样式
        _timer: '',                                             //抽奖定时器
        realNameFlag: false,                                    //实名认证标识
        bindEmail: false,                                       //首次绑定邮箱标识
        bindBankCard: false,                                    //首次绑定银行卡标识
        userHeadImg: require('../../../assets/default-head-img.png'),                                        //用户头像
        userAllPint: '',                                         //用户总的积分
        popShowFlag: false,                                   //弹窗展示标识
        clickFlag: false,                                        //连续点击提示
        signFinishTodayFlag: false,                              //今日是否已经签到
        fastClickFlag: false,                                     //防止连续快速点击，当为true时，禁止点击，当为false时，可以点击
        phoneType: '',                                          //请求头ostype，用来发放签章
        prizeType: 0,                                            //接口获取中奖类型
      }
    },

    beforeDestroy() {
      clearInterval(this._timer);
    },

    created() {
      this.getIndexInfo();                                //获取首页数据
      document.title = '管家任务';
    },


    mounted() {
      window['onResume'] = () => {
        this.getIndexInfo();                                //回到界面更新获取首页数据
      }
      //title右上角点击调用事件
      window['pointDetailCall'] = () => {
        appWebview.openUrlThroughWebView(global.hrefUrl + 'point-detail.html');
      }
      //调用APP端方法，设置title右上角名称
      appWebview.setNavigationBarRightMenu('明细', 'pointDetailCall', '');
      window['getUserHeaders'] = (info) => {
        let userHeaders = JSON.parse(info);
        if (userHeaders.osType == 'Android') {
          this.phoneType = userHeaders.osType.toLowerCase();
        } else {
          this.phoneType = userHeaders.osType;
        }
      }
      appWebview.getHeaders(getUserHeaders);
    },


    methods: {

      /**
       * 用户点击签到
       */
      userSign: function () {
        this.popShowFlag = false;
        if (!!this.clickFlag) {
          this.$toast('请勿频繁操作');
          return;
        }
        this.clickFlag = true;
        signApi.userSign().then(data => {
          this.signFinishTodayFlag = true;
          this.userAllPint = data.integralSum;
          if (this.signCount < 7) {
            this.signCount = this.signCount + 1;
          } else {
            this.signCount = 1;
          }
          this.clickFlag = false;
          this.$toast('签到成功');
        }, err => {
          this.clickFlag = false;
          this.$toast(err.msg);
        })
      },


      /**
       * 开始抽奖
       */
      startRound: function () {

        if (this.userAllPint >= 100) {
          //点击之后，展示蒙层，防止重复点击
          this.fastClickFlag = true;
          this.popShowFlag = false;
          let time = 60;
          let count = 0;
          this.userClickDraw();
          this._timer = setInterval(() => {
            if (count < 70) {
              count = count + 1;
              if (this.awardActive < 8) {
                this.awardActive = this.awardActive + 1;
              } else {
                this.awardActive = 1;
              }
              time = time - count;
            } else {
              clearInterval(this._timer);
              this.awardActive = 0;
              this.fastClickFlag = false;
              this.popShowFlag = true;
              this.getIndexInfo();                                //界面更新获取首页数据
            }
          }, time)
        } else {
          this.$toast('您的积分不足');
        }
      },


      /**
       * 获取首页用户数据
       */
      getIndexInfo: function () {
        this.awardActive = 0;
        signApi.getTaskIndexSignInfo().then(data => {
          if (!!data.avatarUrl) {
            this.userHeadImg = data.avatarUrl;
          }
          this.signFinishTodayFlag = !!data.signIn;
          this.userAllPint = data.integralSum;
          this.signCount = data.days;
          this.realNameFlag = data.hasRealNamed;
          this.bindEmail = data.hasMailBinded;
          this.bindBankCard = data.hasBinded;
        }, err => {
          // this.$toast(err.msg);
        })
      },


      /**
       * 点击已经签到按钮
       */
      sighFinish: function () {
        this.$toast('今天签到已完成');
      },


      /**
       * 点击跳转到待发货列表界面
       */
      toWaitSendAwardPage: function () {
        this.popShowFlag = false;
        appWebview.openUrlThroughWebView(global.hrefUrl + 'wait-send-award.html');
      },


      /**
       * 点击邀请好友注册
       */
      invireUserRegist: function () {
        this.popShowFlag = false;
        let mobile = localStorage.getItem('userMobile');
        let showId = localStorage.getItem('userShowId');
        appWebview.shareLink('管家任务', '参与每日随手签到，精美礼品领不停！', global.hrefUrl + 'invite-regist.html?showId=' + showId + '&mobile=' + mobile + '&time=' + new Date().getTime(), 'weixin,wxcircle,qq,weibo');
      },


      /**
       * 跳转到实名认证界面
       */
      toAppRealName: function () {
        this.popShowFlag = false;
        if (this.realNameFlag) {
          this.$toast('您已实名认证');
        } else {
          appWebview.navigateByRouter('hmiou://m.54jietiao.com/facecheck/checkLiveness?routeType=4');
          // appWebview.navigateByRouter('hmiou://m.54jietiao.com/facecheck/preViewController');
        }
      },


      /**
       * 绑定邮箱
       */
      bindUserEmail: function () {
        this.popShowFlag = false;
        if (this.bindEmail) {
          this.$toast('您已绑定过邮箱');
        } else {
          appWebview.navigateByRouter('hmiou://m.54jietiao.com/person/about_email?routeType=4');
        }
      },


      /**
       * 绑定银行卡
       */
      bindUserBankCard: function () {
        this.popShowFlag = false;
        if (this.bindBankCard) {
          this.$toast('您已绑定过银行卡');
        } else {
          appWebview.navigateByRouter('hmiou://m.54jietiao.com/pay/user_bind_bank?routeType=3')
        }
      },


      /**
       * 开始抽奖，调用接口获取中奖类型
       */
      userClickDraw: function () {
        axios.get('/api/butlertask/signin/v1/clickDraw', {
          headers: {
            'osType': this.phoneType
            // 'osType': 'android'
          }
        }).then(data => {
          this.prizeType = data;
        }, err => {
          this.prizeType = 1;
        })
      }


    }

  }
</script>

<style scoped lang="less">

  .task-index {
    padding: 36px;
    background-image: url("../../../assets/index-bottom-img.png");
    background-size: 100% auto;
    background-attachment: initial;
    background-position: bottom;
    background-repeat: no-repeat;

    .index-top-info {
      padding-bottom: 46px;
      border-bottom: 2px solid #E6E6E6;

      .user-head {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
      }

      .top-point {
        padding-left: 30px;
        font-size: 44px;
        color: #111111;
        font-weight: 600;

        span {
          font-size: 56px;
          padding-right: 20px;
        }
      }

      .sign-day {
        padding-left: 30px;
        font-size: 28px;
        color: #575B62;

        span {
          color: #FFAA2B;
          padding: 0 10px;
          font-size: 30px;
        }
      }

      .user-sign {
        width: 168px;
        position: relative;
        top: 26px;
      }
    }

    /*签到列表样式*/

    ._sign-list {
      padding: 46px 0;
      height: 133px;
      overflow: hidden;

      .sign-one {
        width: 10.7%;
        float: left;

        .sign-point {
          background-color: white;
          text-align: center;
          line-height: 73px;
          border-radius: 50%;
          color: #B8C1D3;
          font-size: 24px;
          height: 0;
          padding-bottom: 100%;
          border: 1px solid #B8C1D3;
        }

        .sign-point-active {
          background-color: #B8CDF3;
          text-align: center;
          line-height: 73px;
          border-radius: 50%;
          color: white;
          font-size: 24px;
          height: 0;
          padding-bottom: 100%;
          border: 1px solid #7AA4F3;
        }

        .sign-already {
          width: 28px;
          height: 28px;
          position: relative;
          top: -80px;
          left: 46px;
        }

        @media only screen and (max-width: 330px) {
          .sign-already {
            width: 14px;
            height: 14px;
            position: relative;
            left: 18px;
            top: -39px;
          }
        }

        .sign-time {
          text-align: center;
          font-size: 24px;
          padding-top: 15px;
        }

        .signTimeActive {
          color: #7AA4F3;
        }
      }

      .sign-line {
        border-top: 1px solid #7AA4F3;
        position: relative;
        top: 39px;
        width: 4.16666667%;
        float: left;
      }
    }


    /*抽奖样式*/

    .index-turn {
      width: 682px;
      height: 658px;
      background: linear-gradient(180deg, rgba(173, 191, 226, 1) 0%, rgba(164, 185, 228, 1) 100%);
      border-radius: 28px;

      .index-turn-inside {
        width: 646px;
        height: 622px;
        background: rgba(106, 130, 175, 1);
        border-radius: 16px;
        position: relative;
        top: 18px;
        display: block;
        margin: auto;

        .inside-round {
          padding: 0 16px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          height: 100%;

          .award-list-top {
            display: flex;
            justify-content: space-between;
            width: 103%;

            .start-round {
              width: 186px;
              height: 186px;
              position: relative;
              top: 7px;
            }

            .award-one {
              width: 190px;
              height: 182px;
              background-color: white;
              border-radius: 16px;

              .award-one-img {
                width: 172px;
                height: 132px;
                display: block;
                margin: auto;
                /*padding-top: 10px;*/
              }

              p {
                font-size: 24px;
                color: #5E82AB;
                text-align: center;
              }
            }
          }
        }
      }

      .awardActive {
        /*box-sizing: border-box;*/
        /*border: 5px solid #2DD7FF;*/
        background-image: url("../../../assets/task-choujiang-active.png");
        background-size: 100% 100%;
      }
    }

    /*待发货样式*/

    .wait-send-award {
      font-size: 28px;
      color: #979EB1;
      text-align: right;
      padding: 30px 0 21px 0;
    }

    .right-middle-img {
      width: 136px;
      position: absolute;
      right: 0;
      top: 964px;
      z-index: -1;
    }

    /*任务列表样式*/

    .task-all-list {
      .task-invite {
        width: 696px;
        height: 134px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 12px 0px rgba(226, 232, 241, 1);
        border-radius: 16px;
        line-height: 134px;
        margin-top: 34px;

        .left-line {
          border-left: 10px solid #A3BFF6;
          height: 52px;
          position: relative;
          top: 41px;
        }

        .task-info {
          font-size: 38px;
          color: #575B62;
        }

        .task-award {
          font-size: 32px;
          color: #979EB1;
        }

        .task-right-icon {
          width: 14px;
          height: 20px;
          float: right;
          top: 58px;
          position: relative;
          padding-right: 30px;
          line-height: 0;
        }

        .task-finish {
          width: 44px;
          height: 44px;
          float: right;
          position: relative;
          top: 45px;
          line-height: 0;
        }
      }
    }

    .avoid-fast-click {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
    }


  }

</style>
