//! bind
// const person1 = {
//     name: "mohan",
//     age: "21",
//     Desigination: "full statck Developer"
// }
// const person2 = {
//     name: "kumar",
//     age: "23",
//     Desigination: "Backend statck Developer"
// }


// function codingMart() {
//     return this.age
// }

// const bindCall = codingMart.bind(person2)
// console.log(bindCall());

//! some()

// const prices = [3, 10, 18, 20];

// const data = prices.some((amt) => amt > 100)
// console.log(data);

//! splice

// const months = ['Jan', 'March', 'April', 'June'];

// const data = months.at(2)

// console.log(data);

//! splice
// const months = ['Jan', 'March', 'April', 'June'];
// const data = months.entries()

// console.log(data.next());
// console.log(data.next());

//! every
// const prices = [3, 10, 18, 20];
// const data = prices.every(data => data > 1)
// console.log(data);

//! fill
// const prices = [3, 10, 18, 20, 3, 10, 18, 20];
// prices.fill(1, 3)
// console.log(prices);

//! reduce
const prices = [3, 10, 18, 20, 3, 10, 18, 20];
const sum = prices.reduce(() => {

}, 0)




//! reduce

//! reduce

//! reduce

//! reduce



//! reversing
// const text = "Mohan the mass"
// console.log(reverseTheString(text))

// function reverseTheString(str) {
// original Text
// console.log(str);
//!split
// const splitedString = str.split("")
// console.log("splitedString -->", splitedString, "Type --> " + typeof (splitedString));

//!reverse
// const revesedString = splitedString.reverse()
// console.log("revesedString -->", revesedString, "Type --> " + typeof (revesedString));

//!join
// const JoinedString = revesedString.join("")
// console.log("JoinedString -->", [JoinedString], "Type --> " + typeof (JoinedString));
// return JoinedString;
// }



//! sorting

// const data = [100, -1, 0, 0, 0, 1, -7, 29, -4, -55, 70, 8, 83, 85];
// console.log(data);

// let i = 0;
// const result = data.sort((a, b) => {
//     i += 1
//     console.log(" A ==>" + a, "B==>" + b);
//     console.log(i);
//     return a - b
// })
// console.log(result);



// const arr = [
//     { name: "mohan" },
//     { name: "Kumar" },
//     { name: "jega" },
//     { name: "sanjay" },
//     { name: "ram" },
//     { name: "king" },
// ]
// console.log(arr[4].name);
// let date = new Date()


// const data = new Date()
// console.log(data.getUTCDate());

const data = 'September,October,November';
const final_data = data.toLowerCase().split(",")
console.log(final_data);
let final_filtered_date = []
const currentYear = new Date().getFullYear();


for (let i = 0; i < 3; i++) {
    let arr1 = [];
    arr1.push(currentYear);
    const month = new Date(`${final_data[i]} 1`).getMonth();
    arr1.push(month);
    arr1.push(1 + " 00:00:01");
    final_filtered_date.push(arr1.join("-"))
}


console.log(final_filtered_date);

const lastday = final_filtered_date[2].split(" ")





