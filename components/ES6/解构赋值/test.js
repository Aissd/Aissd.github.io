/**
 * 1、交换变量的值
 */
// let x = 1;
// let y = 2;
// [x, y] = [y, x];
// console.log(x); // 2
// console.log(y); // 1

/**
 * 2、从函数返回多个值
 */
// 返回一个数组
function returnArray() {
    return [1,2,3];
}
let [a,b,c] = returnArray();
console.log(a, b, c);
// 返回一个对象
function returnObject() {
    return {
        foo: 1,
        bar: 2
    };
}

let {bar, foo} = returnObject();
console.log(bar, foo);