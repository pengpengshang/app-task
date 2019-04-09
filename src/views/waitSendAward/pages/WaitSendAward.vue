<template>
  <div class="point-detail">

    <van-row class="detial-list" v-for="(item, index) in waitSendData" :key="index" v-if="dataFlag">
      <van-col :span="20">
        <p class="detail-name">{{item.prizeName}}</p>
        <p class="detial-time">{{item.createTime}}</p>
      </van-col>
      <van-col class="point" v-if="item.sendGoods == 0" :span="4">待发货</van-col>
      <van-col class="point readSend" v-if="item.sendGoods == 1" :span="4">已发货</van-col>
    </van-row>


    <!--无数据时展示图片-->
    <div class="no-date-img" v-if="!dataFlag">
      <div class="img-no-date">
        <img src="../../../assets/no-data-img.png" width="100%"/>
      </div>
      <p>啊哦，空空如也~</p>
    </div>


    <!--无地址时展示弹窗-->
    <div class="win-top" v-if="winShowFlag">
      <div class="win-detial">
        <p class="info-tip">请立即前往填写收货地址，以便平台给您邮寄奖品！</p>
        <p class="info-button" @click="inputUserAddress">立即填写</p>
      </div>
    </div>


  </div>
</template>

<script>

  import appWebview from '../../../common/appWebView'
  import global from '../../../global/config'
  import taskApi from '../../../api/sign-task'

  export default {
    name: "WaitSendAward",

    data() {
      return {
        dataFlag: true,                  //是否有数据
        winShowFlag: false,              //弹窗是否展示标识
        waitSendData: [],                 //获取待发货列表数据
      }
    },


    created() {
      document.title = '待发货奖品';
      this.getWaitSendData();               //获取待发货数据列表
      this.checkAddress();                  //检测用户是否有收获地址
    },


    mounted() {
      window['onResume'] = () => {
        this.checkAddress();                  //回到界面更新用户是否有收货地址状态
      }
      //title右上角点击调用事件
      window['userAddress'] = () => {
        this.winShowFlag = false;
        appWebview.openUrlThroughWebView(global.hrefUrl + 'user-address.html');
      }
      //调用APP端方法，设置title右上角名称
      appWebview.setNavigationBarRightMenu('收货地址', 'userAddress', '');
    },


    methods: {


      /**
       * 用户点击立即填写进行跳转
       */
      inputUserAddress: function () {
        this.winShowFlag = false;
        appWebview.openUrlThroughWebView(global.hrefUrl + 'user-address.html');
      },


      /**
       * 检测用户是否有收获地址
       */
      checkAddress: function () {
        taskApi.checkUserAddress().then(data => {
          this.winShowFlag = !data;
        }, err => {
          this.$toast(err.msg);
        })
      },


      /**
       * 获取待发货数据列表
       */
      getWaitSendData: function () {
        taskApi.getWaitSendAwardList().then(data => {
          if (data != '') {
            this.dataFlag = true;
            this.waitSendData = data;
          } else {
            this.dataFlag = false;
          }
        }, err => {
          this.$toast(err.msg);
        })
      }


    }

  }
</script>


<style scoped lang="less">

  .point-detail {
    padding: 10px 42px;

    .detial-list {
      padding: 20px 0;
      border-bottom: 1px solid #E6E6E6;

      .detail-name {
        font-size: 28px;
        color: #111111;
        font-weight: 600;
      }

      .detial-time {
        font-size: 24px;
        color: #9B9B9B;
        padding-top: 8px;
      }

      .point {
        text-align: center;
        font-size: 28px;
        color: #9B9B9B;
        font-weight: 600;
        position: relative;
        top: 22px;
      }

      .readSend {
        color: #FFA825;
        font-weight: 600;
      }
    }


    /* 无数据展示的图片 */

    .no-date-img {
      position: relative;
      top: 300px;

      .img-no-date {
        width: 210px;
        height: 210px;
        display: block;
        margin: auto;
      }

      p {
        font-size: 24px;
        color: #9B9B9B;
        text-align: center;
        padding-top: 15px;
      }
    }

    /*无地址时弹窗*/

    .win-top {
      position: fixed;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-color: rgba(0, 0, 0, .5);

      .win-detial {
        width: 580px;
        height: 382px;
        display: block;
        margin: auto;
        background-color: white;
        position: relative;
        top: 30%;
        border-radius: 8px;
        padding: 92px 56px;
        box-sizing: border-box;

        .info-tip {
          font-size: 36px;
          color: #000000;
          text-align: justify;
        }

        .info-button {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 96px;
          line-height: 96px;
          text-align: center;
          background-color: #FFDE48;
          color: #111111;
          font-size: 36px;
          left: 0;
          border-radius: 0 0 8px 8px;
        }
      }
    }

  }

</style>

