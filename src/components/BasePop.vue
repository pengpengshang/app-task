<template>
  <div>
    <!--弹窗展示-->
    <div class="win-top" v-if="showFlag"  @touchmove.prevent>
      <div class="win-detail" :class="{heightClass:(awardNum == 2 || awardNum == 3), thanksHeight:awardNum == 1}">
        <h3 class="award-name">{{awardNameList[awardNum]}}</h3>
        <div class="award-img" v-if="awardNum != 1">
          <img :src="imgList[awardNum]" width="100%"/>
        </div>
        <p v-if="awardNum == 2 || awardNum == 3" class="award-tips">请在“待发货奖品”中填写收货地址，如已填写请忽略提示</p>
        <p class="button-name" @click="buttonClickEvent">{{buttonList[awardNum]}}</p>
      </div>
    </div>
  </div>
</template>

<script>

  import appWebview from '../common/appWebView'
  import global from '../global/config'

  export default {
    name: "BasePop",

    data() {
      return {
        imgList: [                                              //图片列表数据
          './static/img/task-thanks.png',
          './static/img/task-thanks.png',
          './static/img/task-san.png',
          './static/img/task-cup.png',
          './static/img/point-two.png',
          './static/img/task-seal.png',
          './static/img/task-seal.png',
          './static/img/task-seal.png',
          './static/img/point-three.png',
          './static/img/point-one.png',
        ],

        awardNameList: [                                      //奖励名称
          '谢谢惠顾',
          '谢谢惠顾',
          '恭喜获得限量雨伞',
          '恭喜获得限量保温杯',
          '恭喜获得30积分',
          '恭喜获得1枚限时签章',
          '恭喜获得1枚限时签章',
          '恭喜获得1枚限时签章',
          '恭喜获得50积分',
          '恭喜获得10积分',
        ],
        buttonList: [                                      //按钮名称
          '知道了',
          '知道了',
          '立即前往',
          '立即前往',
          '知道了',
          '知道了',
          '知道了',
          '知道了',
          '知道了',
          '知道了',
        ],

      }
    },


    props: {
      awardNum: {
        type: Number,
        required: true
      },
      showFlag: {
        type: Boolean,
        required: false
      }
    },

    created() {

    },

    mounted() {

    },

    methods: {


      /**
       * 点击按钮调起事件
       */
      buttonClickEvent: function () {
        if (this.awardNum == 2 || this.awardNum == 3 ) {
          this.showFlag = false;
          appWebview.openUrlThroughWebView(global.hrefUrl + 'wait-send-award.html')
        } else {
          this.showFlag = false;
        }
      }

    }

  }
</script>

<style scoped lang="less">

  .win-top {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
  }

  .win-detail {
    width: 580px;
    height: 434px;
    background-color: white;
    border-radius: 8px;
    position: relative;
    top: 27%;
    display: block;
    margin: auto;

    .award-name {
      font-size: 36px;
      color: #000000;
      padding: 48px 48px 14px 48px;
      text-align: center;
    }



    .award-img {
      width: 260px;
      height: 180px;
      display: block;
      margin: auto;
    }

    .button-name {
      position: absolute;
      bottom: 0;
      height: 97px;
      width: 100%;
      line-height: 97px;
      text-align: center;
      background-color: #FFDE48;
      border-radius: 0 0 8px 8px;
    }
  }

  .award-tips{
    font-size: 28px;
    color: #9B9B9B;
    text-align: justify;
    padding: 40px 50px;
  }

  .heightClass{
    height: 534px;
  }

  .thanksHeight{
    height: 234px;
  }

</style>
