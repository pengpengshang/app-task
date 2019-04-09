/**
 * Created by liushasha on 2018/12/27.
 */
import Vue from 'vue';

import 'vant/lib/index.css'

import Row from 'vant/lib/row'
import Col from 'vant/lib/col'
import Button from 'vant/lib/button'
import Toast from 'vant/lib/toast'
import Field from 'vant/lib/field'
import CellGroup from 'vant/lib/cell-group'
import Icon from 'vant/lib/icon'
import Popup from 'vant/lib/popup'
import Area from 'vant/lib/area'

Vue.use(Row).use(Col).use(Button).use(Toast).use(Field).use(CellGroup).use(Icon).use(Popup).use(Area)


import UserAddress from './pages/UserAddress';

new Vue({
  el: '#app',
  components: {UserAddress},
  template: '<UserAddress/>'
})
