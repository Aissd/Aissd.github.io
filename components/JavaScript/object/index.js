var Mammal = function(name) {
    this.name = name;
};

Mammal.prototype.getName = function() {
    return this.name;
};

Mammal.prototype.says = function() {
    return this.saying || '';
};

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.getName();
console.log(name);