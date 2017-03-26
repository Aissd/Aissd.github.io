var app = angular.module('app', ['ui.router']);

// 路由
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    // 设置默认地址
    $urlRouterProvider.otherwise('/first');

    $stateProvider
    .state('first', { // $state.go()
        url: '/first', // $location.url()
        pageTitle: '第一页',
        templateUrl: './first.html'
    })
    .state('second', {
        url: '/second?second_params', // 在这里设置形参，多个就  xxx?a&b&c
        pageTitle: '第二页',
        templateUrl: './second.html'
    })
    .state('third', {
        url: '/third?third_params',
        pageTitle: '第三页',
        templateUrl: './third.html',
        controller: function($scope, $stateParams){ // 跟ng-controller一样，这里的controller启动完毕后才到ng-controller那边启动
            $scope.third_params = $stateParams.third_params;
        }
    })
    .state('fourth', {
        url: '/fourth?fourth_params',
        pageTitle: '第四页',
        templateUrl: './fourth.html'
    })
    .state('fifth', {
        url: '/fifth',
        pageTitle: '第五页',
        templateUrl: './fifth.html'
    })
    ;
}]);

//设置页面title
app.run(['$rootScope', function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $rootScope.pageTitle = toState.pageTitle;
    });
}]);