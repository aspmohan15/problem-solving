const data = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const flag = "Mohaln";
const dataObject = {
  Jan: flag === "Mohan" ? "hai" : "kumar",
  Feb: "one",
  Mar: "one",
  Apr: "one",
  May: "one",
  June: "one",
  July: "one",
  Aug: "one",
  Sept: "one",
  Oct: "one",
  Nov: "one",
  Dec: "one",
};

// console.log(dataObject);

const OP = null;
const date = new Date();
// console.log(date.getTime());

const fun = {
  dateFun: () => console.log("I am a function"),
};
//
// console.log("1" + null);

// console.log("i", console.log(fun.dateFun(), "ooooo"));
// let functionScope = "GLobal Scope";
// let functionScope = "GLobal Scope";

function mohan() {
  console.log("MOhan");
  //   let functionScope = "functionScope";
  //   console.log(functionScope);
  function innerFunction() {
    console.log(functionScope);
  }
  let functionScope = "InnerFunctionScope";
  innerFunction();
  return "1";
}

mohan();

// function curryingFunction(ONE) {
//   return function (TWO) {
//     return function (THREE) {
//       return ONE + TWO + THREE;
//     };
//   };
// }

const curryingFunction = (one) => (two) => (three) => one + two + three;
console.log(curryingFunction(1)(1)(1));

const test = {
  prop: "mohan",
  getData: () => {
    return "From Api DATA";
  },
  myCall: function () {
    return this.getData();
  },
};

function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const generatorFunctionCall = generatorFunction();

const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(() => {
      console.log("MOhan is Printed");
    });
  }, 3000);
});

myFirstPromise.then(() => console.log("Resolved"));
