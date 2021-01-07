import Vue from 'vue'
import App from './App.vue'
// import * as vega from 'vega';
// import * as vegalite from 'vega-lite';
import vegaEmbed from 'vega-embed';

Vue.config.productionTip = false;
window.vegaEmbed=vegaEmbed;
new Vue({
  render: h => h(App),
}).$mount('#app')
