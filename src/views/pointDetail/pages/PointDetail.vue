<template>
  <div class="point-detail">

    <!--是否添加瀑布流加载，需要修改接口-->
    <van-list v-model="loading" :finished="finished" @load="onLoad" :finished-text="errMessage">
      <van-row class="detial-list" v-for="(item, index) in detailDataList" :key="index" v-if="dataFlag">
        <van-col :span="18">
          <p class="detail-name">{{pointDetailTitle[item.type]}}<span
            v-if="item.type == 3">({{item.mobile}})</span></p>
          <p class="detial-time">{{item.createTime.substr(0, 16)}}</p>
        </van-col>
        <van-col class="point" :span="6" :class="{pointCJ:item.type == 2, pointThank:item.type == 0}">{{item.integral}}
        </van-col>
      </van-row>
    </van-list>


    <!--无连接时展示图片-->
    <div class="no-date-img" v-if="!dataFlag">
      <div class="img-no-data">
        <img src="../../../assets/no-data-img.png" width="100%"/>
      </div>
      <p>啊哦，空空如也~</p>
    </div>


  </div>
</template>

<script>

  import signApi from '../../../api/sign-task'

  export default {
    name: "PointDetail",

    data() {
      return {
        dataFlag: true,                  //是否有数据
        detailDataList: [],               //明细数据列表
        pointDetailTitle: ['参与抽奖消耗100积分', '每日签到', '参与抽奖消耗100积分', '邀请好友', '完成1份合同签署', '实名认证', '绑定邮箱', '绑定银行卡'],           //积分明细名称
        finished: false,                    //是否结束加载标识
        loading: false,                      //瀑布流标识
        pageNum: 1,                         //分页的页码记录
        pageSize: 15,                        //每一页加载的数量
        errMessage: '',                     //没有更多了提示信息
      }
    },


    created() {
      this.getDetailList();                     //获取积分明细列表
      document.title = '明细';
    },


    mounted() {

    },


    methods: {


      /**
       * 获取明细列表
       */
      getDetailList: function () {
        var dataList = {
          "page": this.pageNum,
          "size": this.pageSize
        }
        signApi.getPointDetail(dataList).then(data => {
          // 加载状态结束
          this.loading = false;
          if (data != '') {
            if(data.length < 15){
              this.finished = true;
            }
            this.dataFlag = true;
            for (var i = 0; i < data.length; i++) {
              this.detailDataList.push(data[i])
            }
          } else {
            if(this.detailDataList.length <= 0){
              this.dataFlag = false;
              this.errMessage = '';
            }else {
              this.errMessage = '没有更多了';
            }
            this.finished = true;
          }
        }, err => {
          this.$toast(err.msg);
        })
      },


      /**
       * 瀑布流加载
       */
      onLoad() {
        // 异步更新数据
        setTimeout(() => {
          this.pageNum = this.pageNum + 1;
          this.getDetailList();
        }, 500);
      },

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
        font-size: 32px;
        color: #7AA4F3;
        font-weight: 600;
        position: relative;
        top: 20px;
        text-align: right;
      }

      .pointCJ {
        color: #FFA825;
      }

      .pointThank {
        color: #B8C1D3;
      }

    }


    /* 无数据展示的图片 */

    .no-date-img {
      position: relative;
      top: 300px;

      .img-no-data {
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

  }

</style>
