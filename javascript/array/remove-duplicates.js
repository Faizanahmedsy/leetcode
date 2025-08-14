/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // uniqueIndex Keeps track of the Position to insert the next unique number
  let uniqueIndex = 0;

  // Start checking from the second element
  for (let currentIndex = 1; currentIndex < nums.length; currentIndex++) {
    const currentNumber = nums[currentIndex];
    const lastUniqueNumber = nums[uniqueIndex];

    if (currentNumber !== lastUniqueNumber) {
      uniqueIndex++; // move to next unique position
      nums[uniqueIndex] = currentNumber; // copy the new unique number
    }
  }

  // Number of unique elements is index + 1
  return uniqueIndex + 1;
};
