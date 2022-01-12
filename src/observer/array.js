let oldArrayProtoMethods = Array.prototype; // 数组原型上的方法

// 不能直接改写数组原有方法 不可靠，因为只有被vue控制的数组才需要改写

export let arrayMethods = Object.create(Array.prototype)

let methods = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'reverse',
    'sort'
];


methods.forEach(method=>{
    arrayMethods[method] = function(...args) { // 重写数组方法
        console.log('数组变化');
        let result = oldArrayProtoMethods[method].call(this,...args);

        return result;
    }
});

arrayMethods.push(1,2,3,4);

