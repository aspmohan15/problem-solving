// closure

function init() {
    let name = "mohan"
    console.log("init");
    function hellow() {
        console.log(name);
    }
    return hellow
}
const value = init();
value()


// diffrent Aproches on closer
function add(x) {
    return function (z) {
        return x + z
    }

}

// normal 
const add5 = add(10)
console.log(add5(6))

//! simple and Abnormal
console.log(add(10)(10));
