/**
 * 二分查找
 *  1）二分查找法，是一个比较高效的查找数组中某一个元素对应的索引的算法
 *  2）使用二分查找法的前提是目标数组必须是有序的，且没有重复元素的数组。
 * array 要查找的数组
 * target 要查找的数字
 * leftIndex 左边的索引值
 * rightIndex 右边的索引值
 */

 /**
  * 1）目标数组是升序的写法
  */
// function binarySearch(array, target, leftIndex, rightIndex) {
//     array.sort(function(a, b) {
//         return a - b;
//     });
//     console.log(array);
//     // 找到中间索引
//     var midIndex = Math.floor((leftIndex + rightIndex) / 2);
//     // 找到中间值
//     var midVal = array[midIndex];
//     if (leftIndex > rightIndex) {
//         console.log("前一位是: ", midVal);
//         console.log('下标: ', midIndex);
//         return;
//     }
//     if (midVal > target) {
//         binarySearch(array, target, leftIndex, midIndex - 1);
//     } else if (midVal < target) {
//         binarySearch(array, target, midIndex + 1, rightIndex);
//     } else {
//         console.log('下标为：' + midIndex);
//         return;
//     }
// }

/**
 * 阶乘 - 1、利用while循环
 * 3 ! = 1 * 2 * 3;
 */

// var result = factorial(6);
// console.log(result);

function factorial(target) {
    var res = 1;
    while(target) {
        res *= target;
        target--;
    }
    return res;
}

/**
 * 阶乘 - 2、利用函数递归
 */

function factorial(target) {
    if(target <= 0) {
        return 1;
    } else {
        return target * arguments.callee(target - 1);
    }
}
