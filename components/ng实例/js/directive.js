// 遮罩层
app.directive('maskerLayer', [function(){
    return {
        restricts: 'AECM',
        link: function(scope, elements, attrs){
            /*
                scope 为该指令的作用域，默认为双向绑定；
                elements 为该指令的标签对象，相当于$('#id')取到的对象；
                attrs 可获取到该指令上的自定义属性
            */
            // 检验浏览器是否存储有，无则显示遮罩层
            scope.isshowlayer = localStorage.removeItem('maskerLayer');

            // 点击关闭
            scope.close = function(){
                localStorage.setItem('maskerLayer', true);
                scope.isshowlayer = true;
            };
        }
    };
}]);
