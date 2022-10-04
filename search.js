// linear search

function search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
    console.log(i);
  }

  return -1;
}

let arr = [5, 2, 10, 4, 6];
console.log(search(arr, 10));

// binary search
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  console.log(right);

  while (left <= right) {
    console.log("small");
    let middleIndex = Math.floor((left + right) / 2);
    if (target === arr[middleIndex]) return middleIndex;
    if (target < arr[middleIndex]) right = middleIndex - 1;
    else left = middleIndex + 1;
  }
  return -1;
}

console.log(binarySearch([12, 3, 12, 32, 123, 2], 123));

// binaryRecursiveSearchF
function binaryRecursiveSearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) return -1;
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  // console.log(arr[middleIndex]);
  console.log(middleIndex);

  if (target === arr[middleIndex]) return middleIndex;

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log(binaryRecursiveSearch([3, 12, 32, 123, 2222, 12334], 12331));
