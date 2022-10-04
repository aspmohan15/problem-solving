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

console.log(result  );



let num = 1004;

let numberArray = Array.from(String(num));

console.log(
  numberArray.map((data) => (data === "0" ? (data = "5") : data)).join("")
);

