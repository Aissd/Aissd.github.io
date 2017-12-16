// function log(x, y = 'world') {
//     console.log(x, y);
// }
// log('hello', 'china'); // hello china
// log('hello'); // hello world
// log('hello', ''); // hello

/**
 * 与解构赋值默认值结合使用
 */
// function foo({x, y = 5}) {
//     console.log(x, y);
// }
// foo({}); // undefined 5
// foo({x: 1}); // 1 5
// foo({x: 1, y: 2}); // 1 2
// foo() // TypeError: Cannot read property 'x' of undefined （接收的必须是一个对象）

/**
 * rest参数
 * 可替换arguments对象。因为arguments对象不是数组，必须使用Array.prototype.slice.call先将其转为数组。
 * rest是一个真正的数组，数组特有的方法都可以使用
 */
// function add(...values) {
//     let sum = 0;
//     for(let val of values) {
//         sum += val;
//     }
//     return sum;
// }
// console.log(add(2,4,5,6,7,7,7,7,)); // 45

// function pushFn(array, ...items) {
//     items.forEach((item) => {
//         array.push(item);
//     });
// }
// let a = [];
// pushFn(a, 1,2,3,4,5,6);
// console.log(a); // [1,2,3,4,5,6]

