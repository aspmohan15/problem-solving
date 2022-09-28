// bubble sort
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
let bubbleSortArray = [9, 8, 7, 4, 5, 6, 56, 1, 2, 3, 2];
bubbleSort(bubbleSortArray);
console.log(bubbleSortArray);
// big-o = Object(n^2) nested loops

// insertion sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let insertTonumber = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > insertTonumber) {
      arr[j + 1] = arr[j];
    }
    j = j - 1;
  }
}

let insertionSortArray = [-20, 2, 78, 1, 96, 87];
insertionSort(insertionSortArray);
console.log(insertionSortArray);

//mergeSort
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
}

let mergeSortArray = [9, 8, 7, 4, 5, 6, 56, 1, 2, 3, 2];
console.log(mergeSort(mergeSortArray));

// quickSort
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

let quickSortArray = [9, 8, 7, 4, 5, 6, 56, 1, 2, 3, 2];
console.log(quickSort(quickSortArray));
