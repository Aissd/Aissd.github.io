// 全局下父级controller
app.controller('indexController', ['$scope', '$state', function($scope, $state){

}]);

// first controller
app.controller('firstController', ['$scope', '$state', function($scope, $state){
    $scope.next = function(){
        $state.go('second', {second_params: '123'});
    };
}]);

// second controller
app.controller('secondController', ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams){
    $scope.second_params = $stateParams.second_params;
    $scope.next = function(){
        $state.go('third', {third_params: '456'});
    };
}]);

// third controller
app.controller('thirdController', ['$scope', '$location', function($scope, $location){
    $scope.next = function(){
        $location.url('fourth?fourth_params=' + '789');
    };
}]);

// fourth controller
app.controller('fourthController', ['$scope', '$location', '$stateParams', function($scope, $location, $stateParams){
    $scope.fourth_params = $stateParams.fourth_params;
    $scope.next = function(){
        $location.url('fifth').replace();
    };
}]);

// fifth controller
app.controller('fifthController', ['$scope', '$state', function($scope, $state){

}]);