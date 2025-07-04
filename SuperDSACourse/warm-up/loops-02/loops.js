// write a fun search array and return index

const arr = [1, 2, 3, 7, 8, 9];

const target = 1;

function searchArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(searchArr(arr));
