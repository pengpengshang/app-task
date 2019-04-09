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



import FastClick from 'fastclick'

FastClick.attach(document.body);

FastClick.prototype.focus = function (targetElement) {
  var length;
// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
  if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length;
    targetElement.focus();
    targetElement.setSelectionRange(length, length);
  } else {
    targetElement.focus();
  }
};



import Index from './pages/Index';

new Vue({
  el: '#app',
  components: {Index},
  template: '<Index/>'
})
