// Vue2.0中就是一个构造函数 class

import { initMixin } from "./init";

function Vue(options) {
    this._init(options); // 当用户new Vue时，就会调用init方法进行vue的初始方法
}

initMixin(Vue);
export default Vue;
