/**
 * Created by liushasha on 2018/12/27.
 */
import Vue from 'vue';

import 'vant/lib/index.css'

import Row from 'vant/lib/row'
import Col from 'vant/lib/col'
import Button from 'vant/lib/button'
import Toast from 'vant/lib/toast'
import List from 'vant/lib/list'

Vue.use(Row).use(Col).use(Button).use(Toast).use(List)


import PointDetail from './pages/PointDetail';

new Vue({
  el: '#app',
  components: {PointDetail},
  template: '<PointDetail/>'
})
