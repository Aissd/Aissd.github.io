
// 1. 定义（路由）组件。
const User = {
    template: `
    <div class="user">
        <h2>User {{ $route.params.id }}</h2>
        <router-view></router-view>
    </div>
  `
};

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const UserHome = {
    template: '<div>Home</div>'
};
const UserProfile = {
    template: '<div>Profile</div>'
};
const UserPosts = {
    template: '<div>Posts</div>'
};

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
    routes: [
        {
            path: '/user/:id',
            component: User,
            children: [
                // UserHome will be rendered inside User's <router-view>
                // when /user/:id is matched
                {
                    path: '',
                    component: UserHome,
                    name: 'home'
                },

                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                {
                    path: 'profile',
                    component: UserProfile,
                    name: 'profile'
                },

                // UserPosts will be rendered inside User's <router-view>
                // when /user/:id/posts is matched
                {
                    path: 'posts',
                    component: UserPosts,
                    name: 'posts'
                }
            ]
        }
    ]
});

// 4. 创建和挂载根实例。
const app = new Vue({
    router,
    methods: {
        home: function(){
            // router.push('home');
            // router.push({ name: 'home', params: { userId: 123 }});
            router.push({ name: 'home', params: { id: '123' }});
        },
        profile: function(){
            // router.push({ name: 'profile', params: { userId: 'profile' }});
            router.push({ name: 'profile', params: { id: 'profile' }});
        },
        posts: function(){
            // router.push({ name: 'posts', params: { userId: 'posts' }});
            router.push({ name: 'posts', params: { id: 'posts' }});
        }
    }
 }).$mount('#app');
