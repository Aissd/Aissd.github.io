var app = angular.module('app', []);

// 控制器
app.controller('watchController', ['$scope', function($scope){
    $scope.$watch('targetInput', function(newValue, oldValue){
        console.log(newValue);
        console.log(oldValue);
        
    }, true);
}]);
