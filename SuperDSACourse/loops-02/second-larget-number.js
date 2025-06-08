const arr = [1, 2, 3, 40, 15, 5];

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function secondLargestNum(sortedArr) {
  if (sortedArr.length < 2) {
    return null;
  }
  return sortedArr[sortedArr.length - 2];
}

let sortedArr = bubbleSort([...arr]);
console.log(secondLargestNum(sortedArr));
console.log(arr);
