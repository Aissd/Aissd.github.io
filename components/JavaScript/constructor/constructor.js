/*
    使用function定义的对象与使用new操作符生成的对象有一个重要区别：
    function定义的对象有一个prototype属性，使用new生成的对象没有这个prototype属性

    prototype对象（Person对象）
    prototype属性又指向了一个prototype对象（Person对象），注意prototype属性与prototype对象是两个不同的东西，要注意区别。
    prototype对象中又有一个constructor属性，这个constructor属性同样指向一个constructor对象，而这个constructor对象恰恰就是这个function函数本身

    new形式创建对象的过程实际分为三步：《悟透JavaScript》
    1、建立一个新对象（A）
    2、将该对象（A）内置的原型对象设置为构造函数（Person）prototype属性引用的那个原型对象
    3、将该对象（A）作为this参数调用构造函数（Person），完成成员设置等初始化工作
*/

function Person(name) {
    this.name = name;
    this.getName = function(){
        return this.name;
    }
}

var p1 = new Person("黄晓明");
console.log(p1.prototype); // undefined
// 证明p1这个对象没有prototype属性
console.log(typeof Person.prototype); //object
console.log(Person.prototype.constructor); // function Person(name) {this.name = name;this.getName = function(){return this.name;}}