/**
 * Created by liushasha on 2018/12/27.
 */
import Vue from 'vue';

import 'vant/lib/index.css'

import Row from 'vant/lib/row'
import Col from 'vant/lib/col'
import Button from 'vant/lib/button'
import Toast from 'vant/lib/toast'

Vue.use(Row).use(Col).use(Button).use(Toast)


import WaitSendAward from './pages/WaitSendAward';

new Vue({
  el: '#app',
  components: {WaitSendAward},
  template: '<WaitSendAward/>'
})
