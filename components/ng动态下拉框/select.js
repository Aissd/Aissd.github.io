var app = angular.module('app', []);

// 控制器
app.controller('selectController', ['$scope', '$http', function($scope, $http){
    // 控制该页面交互的对象
    $scope.ngformData = {};

    // 页面初始化
    initNgFormFn();

    function initNgFormFn() {
        $http.get('select.json').success(function(res){
            $scope.selects  = res;
        }).error(function(res){

        });
    }

    $scope.changeFn = function(){
        for(var i = 0, len = $scope.selects.length; i < len; i++) {
            console.log($scope.selects[i].queryActive);
            for(var j = 0, jlen = $scope.selects[i].queryValues.length; j < jlen; j++){
                console.log($scope.selects[i].queryValues[j]);
            }
        }
    };

    $scope.deleteFn = function(index){
        $scope.selects[index].queryActive = '';
    };

    $scope.submitFn = function(){
        console.log($scope.selects);
    };
}]);
