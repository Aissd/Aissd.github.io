/*
    常用指令
*/
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        list: ['one','two','three','four']
    },
    methods: {
        a: function(){
            console.log(1);
        }
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {text: '蔬菜'},
            {text: '奶酪'},
            {text: '随便其他说明人吃的东西'}
        ]
    }
});
/*
    watch监听，过滤器。v-bind用法
*/
var data = {
    a:1,
    url: 'http://www.baidu.com'
};
var vm = new Vue({
    el: '#example',
    data: data,
    filters: {
        format: function(value){
            if(!value) return '';
            return value + '---';
        }
    }
});

vm.$watch('a', function(newVal, oldVal){
    console.log('newVal-> ' + newVal);
    console.log('oldVal-> ' + oldVal);
});

// console.log(vm.$data === data);
// console.log(vm.$el === document.getElementById('#example'));

/*
    Computed属性
*/
var vm2 = new Vue({
    el: '#example2',
    data: {
        message: 'Hello'
    },
    computed: {
        // a computed getter
        reversedMessage: function () {
            // `this` points to the vm instance
            return this.message.split('').reverse().join('');
        }
    }
});
