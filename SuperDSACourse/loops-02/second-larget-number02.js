const arr = [1, 2, 3, 40, 15, 5, 98, 10];

let largestEle = -Infinity;
let secondLargetEle = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largestEle) {
    secondLargetEle = largestEle; // in this case old value of first larget will be the second laargerst
    largestEle = arr[i];
  } else if (arr[i] > secondLargetEle) {
    secondLargetEle = arr[i];
  }
}

console.log(largestEle, secondLargetEle);
