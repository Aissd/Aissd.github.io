
        // 一、工厂模式
        // 缺点：无法识别对象类型（因为都是Object），因为创建对象都是使用Object的原生构造函数来完成的；每个对象都有自己的getName 函数，不能共享同一个函数。
        function Factory(name, address, type) {
            var f = new Object();
            f.name = name;
            f.address = address;
            f.type = type;
            f.getName = function(){
                return this.name;
            }
            return f; // 使用return返回生成的对象实例
        }
        console.log('--------------工厂模式-----------------');
        var factory = Factory("制造厂", "某省郊外", "流水线工厂");
        console.log(factory.getName()); // 制造厂

        // 二、构造函数方法
        // 缺点：构造函数会重复生成函数，不能共享同一个函数。
        function Person(name, gender, age) {
            this.name = name;
            this.gender = gender;
            this.age = age;
            this.getName = function(){
                return this.name;
            }
        }
        console.log('--------------构造函数方法-----------------');
        var person1 = new Person("迪丽热巴", "女", 24);
        console.log(person1.getName()); // 迪丽热巴

        var person2 = new Person("盛一伦", "男", 24);
        console.log(person2.getName()); // 盛一伦
        // 构造函数会重复生成函数，不能共享同一个函数。
        console.log(person1.getName == person2.getName); //false

        // 三、原型方式
        // 缺点：构造函数没有参数，不能通过构造函数初始化属性值；属性是对象时被多个实例共享容易产生问题
        function Cat(){
            Cat.prototype.name = "汤姆猫";
            Cat.prototype.color = "蓝色";
            Cat.prototype.action = "抓老鼠";
            Cat.prototype.getName = function(){
                return this.name
            }
        }
        console.log('--------------原型模式-----------------');
        var cat1 = new Cat();
        console.log(cat1.getName());

        // 四、组合构造函数及原型模式【推荐】
        // 优点：所有非函数属性都在构造函数创建可以用构造函数赋予属性默认值，所有实例共享一个方法，没有浪费内存，没有副作用【推荐】
        function Car(brand, color, price){
            this.brand = brand;
            this.color = color;
            this.price = price;
            this.models = ['卡罗拉', '佳美', '皇冠'];
        }
        Car.prototype.getBrand = function(){
            return this.brand;
        };
        console.log('--------------组合构造函数及原型模式-----------------');
        var car1 = new Car("广州丰田", "黑色", "20万");
        console.log(car1.models); // ["卡罗拉", "佳美", "皇冠"]
        var car2 = new Car("进口丰田", "黑色", "25万");
        car2.models.push("GTR")
        console.log(car2.models); // ["卡罗拉", "佳美", "皇冠", "GTR"]
        console.log(car1.getBrand == car2.getBrand); // true

        // 五、动态原型方法【推荐】
        // 优点：拥有方法四的优点同时更像其它语言中类的定义【推荐】
        function School(name, degree, isFamous) {
            this.name = name;
            this.degree = degree;
            this.isFamous = isFamous;
            this.majors = ['computer', 'english', 'design'];
            if(typeof School._initialized == 'undefined') {
                School.prototype.getName = function(){
                    return this.name;
                }
                School._initialized = true;
                /*
                    其中_initialized是School的全局私有属性（自定义），
                    （JavaScript中没有私有属性的概念，所有的属性都是共有的，但为了表明一些属性的私有特性，人们习惯在属性名前加上“_”。），
                    当第一次实例化School时，if条件就为真，这样就会定义School中的函数属性。
                    由于School._initialized=true的存在，函数的定义调用一次而无论实例化多少个对象。
                */
            }
        }
        console.log('--------------动态原型方法-----------------');
        var school1 = new School("惠州学院", "一本", true);
        console.log(school1.getName());

        var school2 = new School("广东海洋大学", "一本", true);
        console.log(school2.getName());

        console.log(school1.getName == school2.getName);