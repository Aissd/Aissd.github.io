function createFunctions() {
    var result = new Array();
    for(var i=0;i<10;i++) {
        return[i] = function(num) {
            return function() {
                return num;
            };
        }(i);
    }
    return result;
}