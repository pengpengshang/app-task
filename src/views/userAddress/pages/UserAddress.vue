<template>
  <div class="user-address">


    <van-cell-group>
      <van-field label="收货人" :border="false" class="user-name"
                 input-align="right"
                 v-model="userName"
                 :readonly="notEditFlag"
                 placeholder="请输入您的姓名" maxlength="5"/>
      <van-field label="联系方式" :border="false" class="user-mobile"
                 input-align="right" type="number"
                 v-model="userMobile"
                 :readonly="notEditFlag"
                 oninput="if(value.length>11)value=value.slice(0,11)"
                 placeholder="请输入您的联系方式"/>

      <van-field label="所在地区" :border="false" class="user-mobile"
                 right-icon="arrow"
                 @click="showAreaList"
                 input-align="right"
                 :readonly="true"
                 v-model="userArea"
                 @click-right-icon="showAreaList"
                 placeholder="请选择地址"/>

      <div class="user-detail-address">
        <p class="detail-lable">详细地址</p>
        <textarea maxlength="50" :readonly="notEditFlag" v-model="detailAddress" placeholder="请输入收货人详细地址，如街道、小区、楼栋、单元、门牌号"></textarea>
        <p class="count-length">{{detailAddress.length}}/50</p>
      </div>


    </van-cell-group>


    <!--城市选择列表数据-->
    <van-popup v-model="areaListFlag" position="bottom" :overlay="true">
      <van-area :area-list="areaList" value="110101" @confirm="getAreaData" @cancel="areaListFlag = false"/>
    </van-popup>

    <!--点击保存-->
    <van-button type="default" class="save-address" v-if="!notEditFlag" @click="saveUserAdderss">保存</van-button>


    <!--点击保存弹窗提示-->
    <div class="win-top" v-if="saveWinTopFlag" >
      <div class="win-detail">
        <p class="save-or-not">是否保存修改？</p>
        <van-row class="save-edit-buttom">
          <van-col :span="12" class="cancel" @click.native="saveWinTopFlag = false">取消</van-col>
          <van-col :span="12" class="save" @click.native="saveAddress">保存</van-col>
        </van-row>
      </div>
    </div>


    <!--添加界面透明蒙层，防止界面按钮的多次重复点击-->
    <div class="avoid-fast-click" v-if="fastClickFlag"></div>


  </div>
</template>

<script>

  import areaList from '../../../lib/areaList'
  import utils from '../../../common/utils'
  import appWebview from '../../../common/appWebView'
  import taskApi from '../../../api/sign-task'

  export default {
    name: "UserAddress",
    data() {
      return {
        detailAddress: '',                               //用户详细地址
        areaList: areaList.areaListData,                 //城市列表数据
        areaListFlag: false,                             //城市列表数据展示标识
        userName: '',                                     //用户姓名
        userMobile: '',                                   //用户手机号
        userArea: '',                                     //用户地址
        notEditFlag: true,                                //是否处于不可修改状态,默认可以修改，当从该接口获取到的用户地址不为空时，则变更为不可修改状态，点击右上角修改变更为可修改
        saveWinTopFlag: false,                            //点击保存提示弹窗
        insertAddressFlag: false,                         //是否是插入数据标识
        fastClickFlag: false,                             //防止连续快速点击，当为true时，禁止点击，当为false时，可以点击
        autoId: '',                                       //用户收货地址主键id
      }
    },

    created() {
      this.checkAddress();                                //检测用户是否已有收货地址，如果有的话则保存时调用修改，否则调用新增
    },

    mounted() {
      document.title = '收货地址';
      //title右上角点击调用事件
      window['editAddress'] = () => {
        this.notEditFlag = false;
      }

    },

    methods: {

      /**
       * 点击展示城市列表
       */
      showAreaList: function () {
        if (!this.notEditFlag) {
          this.areaListFlag = true;
        }
      },


      /**
       * 点击确定事件
       * @param val
       */
      getAreaData: function (val) {
        this.userArea = '';
        this.areaListFlag = false;
        val.forEach((item, index) => {
          if (index == 0) {
            this.userArea = this.userArea + item.name;
          } else {
            this.userArea = this.userArea + '-' + item.name;
          }
        })
      },


      /**
       * 点击保存用户的地址
       */
      saveUserAdderss: function () {
        if (!this.userName.trim()) {
          this.$toast('请填写姓名');
          return;
        }
        if (!this.userMobile.trim()) {
          this.$toast('请填写手机号');
          return;
        } else {
          if (!utils.testPhone(this.userMobile.trim())) {
            this.$toast('请填写正确的手机号');
            return;
          }
        }
        if (!this.userArea.trim()) {
          this.$toast('请选择地址');
          return;
        }
        if (!this.detailAddress.trim()) {
          this.$toast('请填写详细地址');
          return;
        }
        if (this.insertAddressFlag) {
          this.insertUserAddress();                                 //插入数据
        } else {
          this.saveWinTopFlag = true;
        }
      },


      /**
       * 提示框点击保存，调用接口保存用户信息
       */
      saveAddress: function () {
        this.updateAddress();
      },


      /**
       * 添加用户收货地址
       */
      insertUserAddress: function () {
        this.fastClickFlag = true;
        let dataList = {
          "cityDetail": this.userArea,
          "detailAddress": this.detailAddress,
          "mobile": this.userMobile,
          "name": this.userName
        }
        taskApi.insertUserAddress(dataList).then(data => {
          this.saveWinTopFlag = false;
          this.notEditFlag = true;
          appWebview.setNavigationBarRightMenu('修改', 'editAddress', '');
          this.checkAddress();                                //检测用户是否已有收货地址，如果有的话则保存时调用修改，否则调用新增
          this.$toast('地址保存成功');
          this.fastClickFlag = false;
        }, err => {
          this.fastClickFlag = false;
          this.$toast(err.msg);
        })
      },


      /**
       * 检测用户是否有收获地址
       */
      checkAddress: function () {
        taskApi.checkUserAddress().then(data => {
          this.insertAddressFlag = !data;
          this.notEditFlag = data;
          if (!!data) {
            //调用APP端方法，设置title右上角名称
            appWebview.setNavigationBarRightMenu('修改', 'editAddress', '');
            //如果用户已经有收获地址则直接获取
            this.getUserAddressDetail();
          }
        }, err => {
          this.$toast(err.msg);
        })
      },


      /**
       * 获取用户收货地址
       */
      getUserAddressDetail: function () {
        taskApi.getUserAddress().then(data => {
          this.userArea = data[0].cityDetail;
          this.userMobile = data[0].mobile;
          this.userName = data[0].name;
          this.detailAddress = data[0].detailAddress;
          this.autoId = data[0].autoId;
        }, err => {
          this.$toast(err.msg);
        })
      },


      /**
       * 修改用户收货地址
       */
      updateAddress: function () {
        this.fastClickFlag = true;
        let dataList = {
          "autoId": parseInt(this.autoId),
          "cityDetail": this.userArea,
          "detailAddress": this.detailAddress,
          "mobile": this.userMobile,
          "name": this.userName
        }
        taskApi.updateUserAddress(dataList).then(data=>{
          this.saveWinTopFlag = false;
          this.notEditFlag = true;
          this.$toast('修改保存成功');
          this.fastClickFlag = false;
        }, err=>{
          this.fastClickFlag = false;
          this.$toast(err.msg)
        })
      }


    }

  }
</script>

<style scoped lang="less">

  .user-address {
    padding: 10px 42px;

    .user-name {
      border-top: none;
      border-bottom: 1px solid #E6E6E6;
      padding: 30px 0px;
      font-size: 28px;
    }

    .user-mobile {
      padding: 30px 0px;
      border-bottom: 1px solid #E6E6E6;
      font-size: 28px;
    }

    [class*=van-hairline]:after {
      border: none;
    }

    .user-detail-address {
      .detail-lable {
        padding: 30px 0;
        font-size: 28px;
        color: #111111;
      }

      textarea {
        width: 100%;
        resize: none;
        background: rgba(248, 248, 249, 1);
        border-radius: 4px;
        height: 324px;
        border: none;
        padding: 18px;
        box-sizing: border-box;
        font-size: 28px;
      }

      .count-length {
        position: relative;
        top: -60px;
        text-align: right;
        padding-right: 20px;
        color: #CFCFD6;
        font-size: 28px;
      }
    }

    .save-address {
      width: 610px;
      height: 96px;
      background: rgba(255, 222, 69, 1);
      border-radius: 8px;
      display: block;
      margin: 110px auto 0 auto;
      border: none;
      outline: 0;
      font-size: 36px;
    }

    /*弹窗样式*/

    .win-top {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);

      .win-detail {
        width: 580px;
        height: 330px;
        background-color: white;
        display: block;
        margin: auto;
        position: relative;
        top: 25%;
        border-radius: 8px;

        .save-or-not {
          text-align: center;
          padding: 92px;
          font-size: 36px;
        }

        .save-edit-buttom {
          position: absolute;
          bottom: 0;
          height: 96px;
          line-height: 96px;
          width: 100%;
          text-align: center;

          .cancel {
            font-size: 36px;
            color: #9B9B9B;
            border-top: 1px solid #E6E6E6;
          }

          .save {
            background-color: #FFDE48;
            font-size: 36px;
            color: #111111;
            border-radius: 0 0 8px 0;
          }
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
