// function outer() {
//     let counter = 0
//     function inner() {
//         counter++
//         console.log(counter);
//     }
//     return inner
// }
// const fn = outer()

// const ArroFUnction = (a, b) => {
//     console.log("outer")

//     return (data) => {
//         console.log(data)
//         return "innerFuntion"
//     }
// };

// const Retuningfunc = ArroFUnction(10, 11);

// setTimeout(ArroFUnction, 1000)

// const f1 = () => (data) => { console.log(data) }
// const retningFunction = f1()
// retningFunction("mohan")

// const Person = {
//   name: "mohan",
//   place: "Covai",
//   desigantiion: "Fullstack",
// };

// function mohan(...rest) {
//   console.log(typeof rest);
// }

// const amount = 12.323231231;
// console.log(amount.toFixed(33));
// let quarterMonths = "December,January,February";
// let quarterMonths = "June,July,August";
// let quarterMonths = "September,October";

// const inputMonths = quarterMonths.toLowerCase().split(",");
// let final_filtered_date = [];
// const currentYear = new Date().getFullYear();
// for (let i = 0; i < 3; i++) {
//   let arr1 = [];
//   let month;
//   arr1.push(currentYear);
//   month = new Date(`${inputMonths[i]} 1`).getMonth();
//   arr1.push(month + 1);
//   if (i !== 2) {
//     arr1.push(1 + " 00:00:01");
//   } else {
//     month = new Date(currentYear, month + 1, 1).getDay();
//     arr1.push(month + " 00:00:01");
//     console.log(month);
//   }
//   final_filtered_date.push(arr1.join("-"));
// }

// console.log(setTimeout);

// var wmi = GetObject("winmgmts:{impersonationLevel=impersonate}");
// console.log(wmi);

// const obj = {
//   name: "joe",
//   age: 35,
//   person1: {
//     name: "Tony",
//     age: 50,
//     person2: {
//       name: "Albert",
//       age: 21,
//       person3: {
//         name: "Peter",
//         age: 23,
//       },
//     },
//   },
// };
// // console.log(JSON.stringify(obj,null,2));
// console.dir(obj, {
//     depth: null,
// });

// const arr = new Array(200).fill("Hello");
// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = arr.map((current, acumulate) => current + acumulate, 0);

// var names = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"];

// const uniq = names
//   .map((name) => {
//     return {
//       count: 1,
//       name: name,
//     };
//   })
//   .reduce((result, b) => {
//     result[b.name] = (result[b.name] || 0) + b.count;

//     return result;
//   }, {});
// const data = ["1ll", 2, 3, 3, 45, 67, 67].filter((e, i, a) => {
//   //   return a.indexOf(e) !== i;
//   return a.indexOf(e) !== i;

//   return;
// });
// console.log(data);

//    a
//   a b
//  a b c
 
