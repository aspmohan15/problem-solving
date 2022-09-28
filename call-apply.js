const person = {
    name: "mohan",
    city: "erode",

}


let fullname = function () {
        console.log(this.name +" "+ this.city)
    }





const person1 = {
    name: "Kumar",
    city: "Gobi",
} 

fullname.call(person1)


// math match all