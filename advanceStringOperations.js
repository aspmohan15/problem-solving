
// const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// const date = new Date()

// const monthOptions = [
//     { value: 1, label: "January" },
//     { value: 2, label: "February" },
//     { value: 3, label: "March" },
//     { value: 4, label: "April" },
//     { value: 5, label: "May" },
//     { value: 6, label: "June" },
//     { value: 7, label: "July" },
//     { value: 8, label: "August" },
//     { value: 9, label: "September" },
//     { value: 10, label: "October" },
//     { value: 11, label: "November" },
//     { value: 12, label: "December" },
// ];
// "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
// console.log(monthOptions);
// const curentMonth = monthOptions[date.getMonth()].label
// console.log(curentMonth);

// var simple;
// simple.MAX_VALUE(10)
// simple = 200
// console.log(simple);


// const data = [

//     "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
// ]
//     // // console.log(data);
// const SlicedData = data.splice(0, 3)

// console.log(SlicedData)

// console.log(data);

// const da =
//     data.Map().length;
// // Map.length
// console.log(da);



// const colorDepartments = ["BA"
//     , "Developer"
//     , "Development"
//     , "hr"
//     , "talent"
//     , "Tester"
//     , "well_being"]


// console.log(colorDepartments.filter(da => da === "Developer" ? "yes" : "no"));

// let arr = []

// const PureArrayFunction = (args) => {
//     arr.push(args)
// }

// const impureFUnctionArray = (number) => (argMentArray) => {
//     argMentArray.concat([number])

// }

// PureArrayFunction(6)

// console.log(impureFUnctionArray(impureFUnctionArray(7)(arr)))

// console.log(arr);

// var a = "number"
// function mohan() {
//     var a = "lkknknknk"
//     console.log("mohan");
// }

// console.log(a);

// const inputUriData = "javascript-interview-questions#what-is-a-prototype-chain"
// let encode = encodeURI(inputUriData)
// console.log(encode);



// const obj = { name: "mohan", desigination: null, age: 21 }
// let data1 = {};
// data1 = Object.entries(obj).map(([k, v]) => {
//     if (k === "name") {
//         return obj.name;
//         // console.log(obj.name)
//     }
// })
// console.log(data1);

// const regex = /^[1-9]{1}[0-9]{2}\\s{0, 1}[0-9]{3}$/
// const regex = /^(\d{4}|\d{6})$/

// const data = "422223"

// if (data.match(regex)) {
//     console.log("treue");
// }
// else {


//     console.log("false");
// }


// const employee = (namme, age, designation) => {
//     let data = "mohan"
//     console.log(namme);
//     console.log(age);
//     console.log(designation);
//     if (namme) {
//         data = "Car"
//     }


// }

// let obj = {
//     myvar: "mohan",
//     myFunction: function () {
//         let self = this
//         console.log(this.myvar);

//         setTimeout(function () {
//             console.log(self.myvar)
//         }, 1000)
//     }
// }


// obj.myFunction()


// const originalArray = [
//   "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
// ]


// const newArray = originalArray.slice().reverse()

// const newArray = [...originalArray].reverse()

// const newArray = originalArray.reduce((accumlator, value, index) => {
//     console.log(index);
//     return [value, ...accumlator];
// }
// )

// prodes


// console.log(originalArray);
// // console.log(newArray);


// const weather = (function getWeather(temp) {
//     switch (true) {
//       case temp < 0:
//         return "freezing";
//       case temp < 10:
//         return "cold";
//       case temp < 24:
//         return "cool";
//       default:
//         return "unknown";
//     }
// })(10);


// console.log(weather);

// const person = {}
// {
//   name: "mohan",
//   age: 21,
//   hobbies: "photography",

// }


// Object.keys(person) ? console.log(Object.keys(person)) : "nn"



// const date = new Date()

// console.log(date.getFullYear() + 0991);

// console.log(date.getMonth() + 3);


// const TITTLE = {
//     reRelease: "Re - Release",
//     pushToPayroll: "Push To Payroll",
//     payrollDelete: "Delete",
//     reviewAgain: "Review Again",

// }


// data = Object.values(TITTLE)
// console.log(data);


// for (i of TITTLE) {
//     console.log(TITTLE);

// }

// TITTLE.reRelease = "🔥"

// console.log(TITTLE);

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

// const newMonths = []

// for (let i = 1; i < months.length; i++) {

//     newMonths.push(months[i])

// }

// console.log(newMonths);


// const TITTLE = [
//     {
//         name: "m",
//         reRelease: "Re - Release",
//     },
//     {
//         name: "mo",
//         pushToPayroll: "Push To Payroll",
//     },
//     {
//         name: "moh",
//         payrollDelete: "Delete",
//     },
//     {
//         name: "n",
//         reviewAgain: "Review Again",
//     }

// ]
// for (let i = 0; i < TITTLE.length; i++) {
//     console.log(TITTLE[i].name);
// }
// const higherOrder = (name) => (tittle) => tittle.filter((data) => data.name === name)
// const fun = higherOrder("m");
// !console.log(fun(TITTLE));


// function getAge(date_1, date_2) {

//     //convert to UTC
//     var date2_UTC = new Date(Date.UTC(date_2.getUTCFullYear(), date_2.getUTCMonth(), date_2.getUTCDate()));


//     var yAppendix, mAppendix, dAppendix;


//     //--------------------------------------------------------------
//     var days = date2_UTC.getDate() - date1_UTC.getDate();
//     if (days < 0) {

//         date2_UTC.setMonth(date2_UTC.getMonth() - 1);
//         days += DaysInMonth(date2_UTC);
//     }
//     //--------------------------------------------------------------
//     var months = date2_UTC.getMonth() - date1_UTC.getMonth();
//     if (months < 0) {
//         date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
//         months += 12;
//     }
//     //--------------------------------------------------------------
//     var years = date2_UTC.getFullYear() - date1_UTC.getFullYear();




//     if (years > 1) yAppendix = " years";
//     else yAppendix = " year";
//     if (months > 1) mAppendix = " months";
//     else mAppendix = " month";
//     if (days > 1) dAppendix = " days";
//     else dAppendix = " day";


//     return years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix + " old.";
// }


// function DaysInMonth(date2_UTC) {
//     var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
//     var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
//     var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
//     return monthLength;
// }


// alert(getAge(new Date(2001, 11, 10), new Date()))

// const date_1 = new Date(2001, 1, 11)
// // const datae = new Date()

// // var date2_UTC = new Date(Date.UTC(date_2.getUTCFullYear(), date_2.getUTCMonth(), date_2.getUTCDate()));



// var date1_UTC = new Date(Date.UTC(date_1.getUTCFullYear()))
// console.log(date1_UTC);
// var date1_UTC = new Date(Date.UTC(date_1.getUTCMonth()))
// console.log(date1_UTC);
// // , date_1.getUTCMonth(), date_1.getUTCDate()));
// var date1_UTC = new Date(Date.UTC(date_1.getUTCDate()))
// console.log(date1_UTC);

function calculateAge(birthMonth, birthDay, birthYear) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    var calculatedAge = currentYear - birthYear;

    let j = 0
    if (currentMonth < birthMonth - 1) {
        j++
        console.log("i")
        calculatedAge--;
    }

    let i = 0
    if (birthMonth - 1 == currentMonth && currentDay < birthDay) {
        i++
        console.log("i")
        calculatedAge--;
    }

    // , i, "j", j);
    return calculatedAge;
}

var age = calculateAge(6, 10, 2001);
console.log(age);




