const data = function (nums) {
  return nums.map((data) => {
    return nums[data];
  });
};

const arr1 = [8, 2];
const arr2 = [3, 1];
const mergedArray = arr1.concat(arr2).sort();
console.log(mergedArray);

function solution(mergedArray, l) {
  if (l % 2 == 0) {
    let z = mergedArray / 2;
    let q = mergedArray[z];
    let e = mergedArray[z - 1];
    let ans = (q + e) / 2;
    return ans;
  } else {
    let z = Math.floor(l / 2);
    return mergedArray[z];
  }
}

// console.log(solution(mergedArray, mergedArray.length));
