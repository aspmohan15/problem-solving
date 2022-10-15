
let jewels = "z",
stones = "ZZ";

let k = 0;
let count = 0;
for (let i = 0; i < jewels.length; i++) {
for (let j = 0; j < stones.length; j++) {
  jewels[i] === stones[j] ? count++ : null;
}
}

console.log(count);



let number = [8, 1, 2, 2, 3];

let arr = [];

for (let i = 0; i < number.length; i++) {
  console.log(arr);
  let j = 0;
  let count = 0;
  while (j < number.length) {
    if (number[i] > number[j]) {
      j++;
      count++;
    } else {
      j++;
    }
  }

  arr.push(count);
}

console.log(arr);

// --------------------------------------------------------
var sound = "grunt";

var bear = { sound: "roar" };

function roar() {
  console.log(this.sound);
}

roar.apply(bear);

let cat = Object.create({ name: "Mohan" });

cat.size = "large";
let copyCat = { ...cat };
cat.type = "tiger";

console.log(copyCat);

// ________________________________________________________________
let animals = [{ type: "lion" }, "tiger"];

let clone = animals.slice();
clone[0].type = "bear";
clone[1].type = "sheep";

console.log(animals);
console.log(animals[0].type, clone[0].type);
console.log(animals[1], clone[1]);

// cartesian of the product

function cartesian() {
  let arr1 = [1, 2];
  let arr2 = [3, 4];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(arr1[i], arr2[j]);
    }
  }
}
// cartesian()

// climbing staircase
function climbingStaircase(n) {
  if (n < 2) {
    return n;
  }
  return climbingStaircase(n - 1) + climbingStaircase(n - 2);
}

console.log(climbingStaircase(8));

//problems
function ZeroOne() {
  let arr = [1, 0, 0, 0, 1, 1, 0, 0, 1];
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

ZeroOne();

let vowels = ["a", "e", "i", "o", "u"];

let str = "Mohaniouuuknj";

let result = "";
for (let i = 0; i < str.length; i++) {
  if (!vowels.includes(str[i])) {
    result += str[i];
  }
}

console.log(result);

let num = 1004;

let numberArray = Array.from(String(num));

console.log(
  numberArray.map((data) => (data === "0" ? (data = "5") : data)).join("")
);
