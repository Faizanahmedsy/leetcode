/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;

  let xCopy = x;
  let reversedNums = 0;

  while (x > 0) {
    let lastDigit = x % 10;
    reversedNums = reversedNums * 10 + lastDigit;
    x = Math.floor(x / 10);
  }

  return xCopy === reversedNums;
};
