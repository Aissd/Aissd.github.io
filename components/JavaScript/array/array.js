/**
 * 1、some
 * 2、every
 * 3、map
 * 4、reduce
 * 5、filter
 * 6、forEach
 * 7、indexOf
 * 8、find
 * 9、findIndex
 * 10、keys
 * 11、includes
 * 12、join
 * 13、push
 * 14、reverse
 * 15、shift
 * 16、slice
 * 17、sort
 * 18、splice
 * 19、unshift
 * 20、concat
 * 21、copyWithin
 */

/**
 * 1、some(callback(currentValue, index, array)[, thisArg])
 * callback 用来测试每个元素的函数
 *  currentValue 数组正在处理的当前元素
 *  index 数组中正在处理的当前元素的索引
 *  array 方法被调用的数组
 * thisArg 执行callback时使用的this值
 * 用来测试的元素只要有一个符合，则返回true
 * 返回true或false
 */
//  let res = [1,2,3,4,5,6,7].some((element, index, array) => {
//     // console.log(this);
//     return element > 4 && index < 2; // false
//  }, this);
//  let res = [1,2,3,4,5,6,7].some(element => {
//     return element > 4; // true
//  }, this);
//  console.log(res); 


/**
 * 2、every(callback(currentValue, index, array)[, thisArg])
 * callback 用来测试每个元素的函数
 *  currentValue 数组正在处理的当前元素
 *  index 数组中正在处理的当前元素的索引
 *  array 方法被调用的数组
 * thisArg 执行callback时使用的this值
 * 用来测试的元素全部符合，则返回true
 * 返回true或false
 */
//  let res = [1,2,3,4,5,6,7].every((element, index, array) => {
//     // console.log(this);
//     return element > 4 && index < 2; // false
//  }, this);
//  let res = [1,2,3,4,5,6,7].every(element => {
//     return element > 4; // false
//  }, this);
//  console.log(res);


/**
 * 3、map(callback(currentValue, index, array)[, thisArg])
 * callback 用来测试每个元素的函数
 *  currentValue 数组正在处理的当前元素
 *  index 数组中正在处理的当前元素的索引
 *  array 方法被调用的数组
 * thisArg 执行callback时使用的this值
 * 方法创建一个新数组，其结果是该数组中的每个元素都调用一个提供的函数后返回的结果
 * 返回一个新的数组，，每个元素都是回调函数的结果
 */
//  let res = [1,2,3,4].map((element) => {
//     return element *= 2;
//  });
//  console.log(res); // [2,4,6,8]

 /**
 * 4、reduce(callback(accumulator, currentValue, currentIndex, array)[, initialValue])
 * callback 用来测试每个元素的函数
 *  accumulator 累加器累加回调的返回值，它是上一次调用回调时返回的累积值，或initialValue
 *  currentValue 数组正在处理的当前元素
 *  index 数组中正在处理的当前元素的索引
 *  array 方法被调用的数组
 * initialValue 可选，用作第一个调用callback的第一个参数的值。如果没有提供初始值，则将使用数组中的第一个元素。在没有初始值的空数组上调用reduce将报错
 * 方法从数组的第一项开始，逐个遍历到最后一项
 * 返回方法累计处理的结果
 */
//  let sum = [1,2,3,4].reduce((pre, cur) => {
//     return pre + cur;
//  }, 1);
//  console.log(sum); // 11 初始值是1，与后面的1,2,3,4相继累加操作

/**
 * 5、filter(callback(currentValue, index, array)[, thisArg])
 * callback 用来测试每个元素的函数
 *  currentValue 数组正在处理的当前元素
 *  index 数组中正在处理的当前元素的索引
 *  array 方法被调用的数组
 * thisArg 执行callback时使用的this值
 * 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素
 * 返回一个新的通过测试的元素的集合的数组
 */
//  let res = [1,2,3,4].filter((element) => {
//     return element > 1;
//  });
//  console.log(res); // [2,3,4]


/**
 * 6、forEach(callback(currentValue, index, array)[, thisArg])
 * callback 用来测试每个元素的函数
 *  currentValue 数组正在处理的当前元素
 *  index 数组中正在处理的当前元素的索引
 *  array 方法被调用的数组
 * thisArg 执行callback时使用的this值
 * 方法对数组的每个元素执行一次提供的函数
 * 返回 undefined
 */
// let res = [1,2,3].forEach((element, index, array) => {
//     return element;
// });
// console.log(res);

/**
 * 7、indexOf(searchElement[, fromIndex = 0])
 * searchElement 要查找的元素
 * fromIndex 开始查找的位置。
 *  1）若索引值大于或等于数组长度，意味着不会在数组里查找，返回-1
 *  2）若参数中提供的索引值是一个负值，则将其作为数组默认的一个抵消，即-1表示从最后一个元素开始查找，以此类推。
 * 方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
 * 返回 索引值
 */
// console.log([1,2,3,4,5].indexOf(5)); // 4


/**
 * 8、find(callback(currentValue, index, array)[, thisArg])
 * callback 用来测试每个元素的函数
 *  currentValue 数组正在处理的当前元素
 *  index 数组中正在处理的当前元素的索引
 *  array 方法被调用的数组
 * thisArg 执行callback时使用的this值
 * 当某个元素通过callback的测试时，返回数组中的一个值，否则返回undefined
 * 返回通过callback测试的值，否则返回undefined
 */
// var inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
// ];
// let res = inventory.find(element => {
//     return element.name === 'apples';
// });
// console.log(res); // {name: "apples", quantity: 2}


/**
 * 9、findIndex(callback(currentValue, index, array)[, thisArg])
 * callback 用来测试每个元素的函数
 *  currentValue 数组正在处理的当前元素
 *  index 数组中正在处理的当前元素的索引
 *  array 方法被调用的数组
 * thisArg 执行callback时使用的this值
 * 方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
 * 返回通过callback测试的值，否则返回-1
 */
// var inventory = [
//     {name: 'apples', quantity: 2},
//     {name: 'bananas', quantity: 0},
//     {name: 'cherries', quantity: 5}
// ];
// let res = inventory.findIndex(element => {
//     return element.name === 'apples';
// });
// console.log(res); // 0

/**
 * 10、keys()
 * 方法返回一个新的Array迭代器，它包括数组中每个索引的键
 */
// var arr = ["a", "b", "c"];
// var iterator = arr.keys();
// console.log(iterator.next()); // { value: 0, done: false }
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }

/**
 * 11、includes(searchElement[, fromIndex])
 *  searchElement 需要查找的元素值
 *  fromIndex 从该索引处开始查找 searchElement。
 *      若为负值，则按升序从array.length + fromIndex的索引开始搜索。默认为0
 *  方法用来判断一个数组是否包含一个指定的值
 *  返回布尔值
 */
// console.log([1,2,3,4,5].includes(5)); // true

// function unique(arr) {
//     var ret = [];
//     arr.forEach(function(item){
//         if(!ret.includes(item)){
//             ret.push(item);
//         }
//     });
//     return ret;
// }

/**
 * 12、reverse()
 *  方法颠倒数组中元素的位置，并返回该数组的引用
 *  该方法会改变原始数组
 */
// let arr = [1,2,3,4,5];
// let res = arr.reverse();
// console.log(arr); // [5,4,3,2,1]

/**
 * 13、shift()
 * 
 * 方法从数组中删除第一个元素，并返回该元素的值
 * 该方法会改变原始数组（更改数组长度）
 * 返回从数组中删除的元素；
 * 如果数组为空，则返回undefined
 */
// let arr = [1,2,3,4,5];
// console.log(arr.shift()); // 1
// console.log(arr); // [2,3,4,5]
// console.log([].shift()); // undefined

/**
 * 14、slice(begin, end)
 *  begin 从该索引处开始提取原数组的元素(从0开始)
 *      1）若该参数为负数，则表示从原数组中的倒数第几个元素开始提取，-2表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）
 *      2）如果省略begin，则从索引0开始。
 *  end 在该索引处结束提取原数组元素（从0开始）。slice会提取原数组中索引从begin到end的所有元素[begin, end)
 *      1）若该参数为负数，则它表示在原数组中的倒数第几个元素结束抽取。slice(-2, -1)表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）
 *      2）若省略end，则slice会一直提取到原数组末尾
 *      3）若end大于数组长度，slice也会一直提取到原数组末尾
 * 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。
 * 该方法不会改变原始数组
 */
// var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
// var citrus = fruits.slice(1, 3);
// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']

/**
 * 15、sort()
 * 方法在适当的位置对数组的元素进行排序，并返回数组。
 * sort排序不一定是未定的，默认排序是根据字符串Unicode码点
 */
//  let res = [2,3,5,1,6,99].sort((first, second) => {
//      return first - second;
//  });
//  console.log(res); // [1,2,3,5,6,99]

/**
 * 16、splice(start[, deleteCount, item1, item2, ...])
 *  start -> 指定修改的开始位置（从0计数）。
 *          如果超出了数组的长度，则从数组末尾开始添加内容；
 *          如果是负值，则表示从数组末位开始的第几位（从1计数）；
 *          若只使用start参数而不使用deleteCount、item，如：array.splice(start) ，表示删除[start，end]的元素。
 *  deleteCount  -> 整数，表示要移除的数组元素的个数。
 *                  如果 deleteCount 是 0，则不移除元素。
 *                  这种情况下，至少应添加一个新元素。
 *                  如果 deleteCount 大于start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。
*                   如果deleteCount被省略，则其相当于(arr.length - start)。
 *  item1, item2, ...  -> 要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
 * 方法通过删除现有元素/或添加新元素来更改一个数组的内容
 * 返回由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
 * 该方法会修改原始数组
 */
// var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
// myFish.splice(2, 0, 'drum'); // 在索引为2的位置插入'drum'
// console.log(myFish); // myFish 变为 ["angel", "clown", "drum", "mandarin", "sturgeon"]
// myFish.splice(1, 1); // 从索引为2的位置删除一项（也就是'drum'这一项）
// console.log(myFish); // ["angel", "drum", "mandarin", "sturgeon"]

/**
 * 17、unshift(element, ..., elementN)
 * element -> 要添加到数组的元素
 * 方法将一个或多个元素添加到数组的开头，并返回新数组的长度
 */
// var arr = [1, 2];
// arr.unshift(0); //result of call is 3, the new array length
// //arr is [0, 1, 2]
// arr.unshift(-2, -1); // = 5
// //arr is [-2, -1, 0, 1, 2]
// arr.unshift( [-3] );
// //arr is [[-3], -2, -1, 0, 1, 2]

/**
 * 18、concat(value1[, value2[, ...[, valueN]]])
 * valueN -> 将数组和/或值连接成新数组
 * 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
 * 返回新的Array实例，该方法不改变原始数组
 */
// var num1 = [1, 2, 3],
// num2 = [4, 5, 6],
// num3 = [7, 8, 9];
// var nums = num1.concat(num2, num3);
// console.log(nums); // results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * 19、from(arrayLike, mapFn, thisArg)
 * arrayLike 想要换成数组的伪数组对象或可迭代对象
 * mapFn 若指定了改参数，新数组中的每个元素都会执行该回调函数
 * thisArg 执行回调函数mapFn时的this对象
 */
// let array = [1,2,2,3,3,3,4,5,6,6,7,,8,,9,9,10,,];
// function unique(arr){
//     var set = new Set(arr);
//     return Array.from(set);
// }
// console.log(unique(array)); // [1, 2, 3, 4, 5, 6, 7, undefined, 8, 9, 10]