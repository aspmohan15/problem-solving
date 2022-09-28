const p = new Promise((resolve, reject) => {
    let a = 0;
    if (a == 10) {
        resolve("pass")
    }
    else {
        reject("fail")
    }
})

p.then(msg => console.log(msg)).catch(err => console.log(err))