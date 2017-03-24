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

    $scope.ngformData.selectid = []; // 用来保存已选的复选框id
    $scope.ngformData.selectname = []; // 用来保存已选的复选框name
    // ----------------------点击复选框
    $scope.select = function($event){
        // ng的event对象
        var selectid = $scope.ngformData.selectid,
            selectname = $scope.ngformData.selectname,
            target = $event.target, // 获取该点击对象
            ischecked = target.checked, // 获取该复选框的状态
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