var app = angular.module('app', []);

// 控制器
app.controller('ngformController', ['$scope', '$http', function($scope, $http){
    // 控制该页面交互的对象
    $scope.ngformData = {};

    // 页面初始化
    initNgFormFn();

    function initNgFormFn() {
        $http.get('ngform.json').success(function(res){
            if(res.code === 0) {
                $scope.ngformObj  = {
                    interests: res.interesting,
                    nations: res.nations,
                    professions: res.professions
                }
            }
        }).error(function(res){

        });
    }

    $scope.ngformData.selectid = [];
    $scope.ngformData.selectname = [];
    // ----------------------点击复选框
    $scope.select = function($event){
        var selectid = $scope.ngformData.selectid;
        var selectname = $scope.ngformData.selectname;
        var target = $event.target,
            ischecked = target.checked,
            action = ischecked ? 'add' : 'remove',
            id = target.id,
            name = target.name,
            idx = selectid.indexOf(id);
        if(action === 'add' && idx === -1) {
            selectid.push(id);
            selectname.push(name);
        } else if (action === 'remove' && idx > -1){
            selectid.splice(idx, 1);
            selectname.splice(idx, 1);
        }
        console.log(selectid);
        console.log(selectname);
    };
    // ----------------------点击复选框 end

    // 提交
    $scope.submit = function(){
        console.log($scope.ngformData);
    };
}]);