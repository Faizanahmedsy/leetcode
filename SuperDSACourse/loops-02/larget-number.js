const arr = [5, 50, 89, 69, 80, 12, 90];

function findLargestNum(arr) {
  let largestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }
  }
  return largestNum;
}

console.log(findLargestNum(arr));
