var app = new Vue({
    el: '#app',
    methods: {

    }
});

var list = [
        {
            name: 'aaa',
            age: 27,
            gender: 'male'
        },
        {
            name: 'bbb',
            age: 25,
            gender: 'female'
        },
        {
            name: 'ccc',
            age: 26,
            gender: 'female'
        }
    ];

Vue.component('my-row', {
    data: function(){
        return list;
    },
    template:
    // '<div>{{list}}</div>'
    // `
    //     <tr v-for="item in list">
    //         <td>{{item.name}}</td>
    //         <td>{{item.age}}</td>
    //         <td>{{item.gender}}</td>
    //     </tr>
    // `
    '<div v-for="item of list"><div>{{item.name}}</div><div>{{item.age}}</div><div>{{item.gender}}</div></div>'
});

new Vue({
    el: '#app'
});
