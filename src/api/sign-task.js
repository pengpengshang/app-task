import fetch from './fetch'


/**
 *获取任务首页签到数据
 * @returns {*}
 */
function getTaskIndexSignInfo() {
  return fetch.get('/api/butlertask/signin/v1/enterTask');
}


/**
 * 用户点击签到
 * @returns {*}
 */
function userSign() {
  return fetch.get('/api/butlertask/signin/v1/signIn');
}


/**
 * 检测用户是否已经有地址
 */
function checkUserAddress() {
  return fetch.get('/api/iou/dial/v1/isHaveAddressInfo');
}


/**
 * 获取用户积分明细
 * @returns {*}
 */
function getPointDetail(data) {
  return fetch.post('/api/butlertask/signin/v1/integralInfo', data);
}



/**
 * 获取我的收货地址
 * @returns {*}
 */
function getUserAddress() {
  return fetch.get('/api/iou/dial/v1/getCustomerReceiverAddressByUserId');
}


/**
 * 添加或者更新用户收货地址
 * @param data
 * @returns {*}
 */
function insertUserAddress(data) {
  return fetch.post('/api/iou/dial/v1/addAddressInfo', data);
}


/**
 * 获取待发货数据列表
 * @returns {*}
 */
function getWaitSendAwardList() {
  return fetch.get('/api/butlertask/signin/v1/deliverGoodsList');
}


/**
 * 修改用户收货地址
 * @param data
 * @returns {*}
 */
function updateUserAddress(data) {
  return fetch.post('/api/iou/dial/v1/updateAddressInfo', data);
}



/**
 * 获取剪切板内容
 * @param data
 * @returns {*}
 */
function getCopyContent(data) {
  return fetch.post('/api/iou/front/v2/moneyV2/getShearPlate', data);
}



export default {
  getTaskIndexSignInfo,
  userSign,
  getPointDetail,
  checkUserAddress,
  getUserAddress,
  insertUserAddress,
  getWaitSendAwardList,
  updateUserAddress,
  getCopyContent
}
