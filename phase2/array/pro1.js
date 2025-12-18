const nums = [1, 2, 3, 4, 5, 6, 7, 8];

function looping(arr) {
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    // console.log("🚀 ~ abc ~ item:", item);
  }
}

function sumOfAllNums(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    result = result + item;
  }

  return result;
}

function findMax(arr) {
  if (arr.length === 0) return null;

  let result = arr[0];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    result = Math.max(result, item);
  }

  return result;
}

function countEven(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item % 2 == 0) {
      result++;
    }
  }

  return result;
}

function findMin(arr = [3, -1, -7, 2, 5]) {
  if (arr.length == 0) return null;

  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    const curNum = arr[i];

    min = Math.min(min, curNum);
  }

  return min;
}

function largestEven(arr = [3, 7, 4, 9, 2]) {
  let best = null; // no even found yet

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];

    if (curr % 2 === 0) {
      if (best === null || curr > best) {
        best = curr;
      }
    }
  }

  return best;
}

function containDuplicate(arr = [1, 2, 3, 12, 2]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containDuplicate());
