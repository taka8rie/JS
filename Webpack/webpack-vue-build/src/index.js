import Vue from 'vue';
import {add, sub} from './util';
import App from './App';
console.log(add(1, 2));
// rm -rf
// main.js 7.42   10.42
// main--12344.js 10:00 上线了一个新的

new Vue({
  render: h => h(App),
  components: {App},
}).$mount('#app')