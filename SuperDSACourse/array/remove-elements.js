/**
 * Removes all instances of `val` from the array `nums` in-place.
 * Returns the number of elements left after removal.
 *
 * @param {number[]} nums - The input array of numbers
 * @param {number} val - The value to be removed from the array
 * @return {number} - The count of remaining elements (non-`val`)
 */
var removeElement = function (nums, val) {
  // This index tells us where to place the next valid (non-val) number
  let writeIndex = 0;

  // Loop through every element in the array
  for (let currentIndex = 0; currentIndex < nums.length; currentIndex++) {
    const currentNumber = nums[currentIndex];

    // If the current number is not equal to the value we want to remove
    if (currentNumber !== val) {
      // Place the current number at the writeIndex position
      nums[writeIndex] = currentNumber;

      // Move writeIndex ahead to the next position
      writeIndex++;
    }

    // If currentNumber === val, we skip it (don't copy it)
  }

  // After the loop ends, writeIndex tells us how many valid elements we have
  return writeIndex;
};
