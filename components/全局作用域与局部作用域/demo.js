// 题目一
var demo1_a = 100;
function demo1(){
    console.log(demo1_a);
    var demo1_a = 10;
    console.log(demo1_a);
}
// 结果：undefined ， 10

/*
    Javascript在执行前会对整个脚本文件的声明部分做完整分析(包括局部变量)，但是不能对变量定义做提前解析，
    在这个函数中，执行第3行前，可以认为已经声明了变量demo1_a，但是并没有定义（这里即赋值），所以第3行输出结果为undefined，
    执行第4行demo1_a =10后，变量demo1_a的值就为10，所以第5行输出结果为10。
*/