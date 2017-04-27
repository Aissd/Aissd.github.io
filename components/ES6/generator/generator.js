/*
    调用Generator函数，返回一个遍历器对象，代表Generator函数的内部指针。
    以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。
    value属性表示当前的内部状态的值，是yield语句后面那个表达式的值；
    done属性是一个布尔值，表示是否遍历结束。
*/
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var hw = helloWorldGenerator();
console.log(hw.next());
// { value: 'hello', done: false }
console.log(hw.next());
// { value: 'world', done: false }
console.log(hw.next());
// { value: 'ending', done: true }
console.log(hw.next());
// { value: undefined, done: true }
