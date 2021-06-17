import Btn from './src/index';

/* istanbul ignore next */
Btn.install = function(Vue) {
  Vue.component(Btn.name, Btn);
};

export default Btn;
