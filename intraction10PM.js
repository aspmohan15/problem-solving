const Data = new String("1" + "2");

// console.log(eval(Data.valueOf()));

const sentence = "The quick brown fox jumps over the laz dog Z zoom.";

const worldString = "Hello, world";
// console.log(worldString.fixed())

const ArrayOne = [
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
const ArrayTwo = [
  "1Jan",
  "1Feb",
  "1Mar",
  "1Apr",
  "1May",
  "1June",
  "1July",
  "1Aug",
  "1Sept",
  "1Oct",
  "1Nov",
  "1Dec",
];

const data = ArrayOne.entries();

// console.log(data);
for (const element of data) {
  //   console.log(element);
}

const resultData = ArrayOne.forEach(
  (data, index, arr) => data
  //   console.log(data, "___", index, "___", arr)
);

// console.log(resultData);

const resultMapData = ArrayOne.map((data) => data);
// console.log("resultMapData", resultMapData);
// console.log(resultData

const key = ArrayOne.values();

for (const data of key) {
  //   console.log(data);
}

//map
const value = ArrayOne.map((data, index, array) => {
  //   console.log(array[index].replace(data, "Kumar"));
});

// console.log(Array.of(7));

const pushMethod = ArrayOne.push("");
// console.log(pushMethod);

const NumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ArrValue = NumberArray.reduce(
  (previousValue, currentValue, currentIndex) => {
    return previousValue + currentValue;
  },
  8
  // console.log("data ->" + data, "\nindex ->" + arr, "\nacc ->" + index, "\narr -> " + acc)
);

// console.log(ArrValue);

const FlatenArray = [
  [2, 1],
  [3, 4],
  [5, 6],
];

const dataGood = FlatenArray.reduce((previousvalue, curentValue, index) =>
  previousvalue.concat(curentValue)
);

const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "2"];

const KL = myArray.reduce((prev, cur, index, arr) => {
  //   console.log(prev.indexOf(cur), cur, prev);
  //   console.log("_________________Reduce_______________");
  //   console.log(prev, cur, index, arr);
  if (prev.indexOf(cur) === -1) {
    // console.log(prev.indexOf(cur));
    // console.log("cur", cur, "prev", prev);
    prev.push(cur);
  }
  return prev;
}, []);

// console.log(KL);
const reduceRight = myArray.reduceRight((prev, cur, index, arr) => {
  // console.log("_________________Right  Reduce_______________");
  //   console.log(prev, cur, index, arr);
});

const myFish = ["angel", "clown", "mandarin", "surgeon"];
myFish.shift();

// console.log(shifted);

// console.log(myFish);

// ___________________________________________________________________________________

// slice vs splice

const animals = ["ant", "bison", "camel", "duck", "elephant"];

const sliced = animals.slice(0, 4);
// console.log("sliced", sliced);
// console.log("original", sliced);

const animalsSplice = ["ant", "bison", "camel", "duck", "elephant"];
// const spliced = animalsSplice.splice(0, 10);
// console.log("Spliced", spliced);
// console.log("original", animalsSplice);

const dataAnimal = animalsSplice.unshift(1, 3);

console.log(dataAnimal);
