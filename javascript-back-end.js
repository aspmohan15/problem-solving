let x = 10

function add(x) {
    console.log("Add function Reached")
    return x + 10
}

function hellow() {
    let x = 1
    let y = add(x)

    function plus(y) {
        console.log("plus")
        return y + 2
    }
    () => {
        console.log("Arrrow");
    }
    console.log(plus(y))
    return "mohan"
}

const fun = hellow()
console.log(fun);