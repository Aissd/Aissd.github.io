var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/first');

    $stateProvider
    .state('first', {
        url: '/first',
        pageTitle: '第一页',
        templateUrl: './first.html'
    })
    .state('second', {
        url: '/second?second_params',
        pageTitle: '第二页',
        templateUrl: './second.html'
    })
    .state('third', {
        url: '/third?third_params',
        pageTitle: '第三页',
        templateUrl: './third.html',
        controller: function($scope, $stateParams){
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