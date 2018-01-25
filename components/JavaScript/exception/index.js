function sum(a, b) {
    if(arguments.length < 2) {
        throw {
            name: 'paramsError',
            message: 'add needs two numbers'
        };
    } else if(typeof a != 'number' || typeof b != 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
}

var try_it = function() {
    try {
        sum('seven', 2);
    } catch (e) {
        console.log(e.name + ': ' + e.message);
    } finally {
        console.log('excute');
    }
};

try_it();