const arr = [0, 1, -10, 90, 80];

function findNegativeNums(arr) {
  let noOfNeativeNums = 0;

  if (arr.length == 0) {
    return 0;
  }

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] < 0) {
      noOfNeativeNums++;
    }
  }

  return noOfNeativeNums;
}

console.log(findNegativeNums(arr));
