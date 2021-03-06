import { observe } from "./observer/index";

export function initState(vm) {
    // 将所有数据都定义在 vm 属性上，并且后续更改 需要触发视图更新
    const opts = vm.$options; // 获取用户属性
    if(opts.props){
        
    }
    if(opts.methods) {

    }
    if(opts.data) { // 数据的初始化
        initData(vm);
    }
    if(opts.computed){

    }
    if(opts.watch) {

    }
    
}

function proxy(vm,source,key) {
    Object.defineProperty(vm,key,{
        get(){
            return vm[source][key]
        },
        set(newValue) {
            vm[source][key] = newValue;
        }
    })
}

function initData(vm) {
    // 数据劫持
    let data = vm.$options.data;

    // 对data类型进行判断 如果是函数 获取函数返回值作为对象
    data = vm._data =  typeof data === 'function'?data.call(vm):data;

    // 通过vm._data 获取劫持后的数据，用户就可以拿到_data了
    // 将_data中的数据全部放到vm上
    for(let key in data) {
        proxy(vm,'_data',key); // vm.name => vm._data.name
    }

    // 观测这个数据
    observe(data);
}