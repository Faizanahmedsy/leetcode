// 283. Move Zeroes
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

class Solution {
    public void moveZeroes(int[] nums) {
        int slow = 0; // Pointer for placing non-zero elements
        
        // Move non-zero elements to the front
        for (int fast = 0; fast < nums.length; fast++) {
            if (nums[fast] != 0) {
                // Swap only if necessary (fast > slow)
                int temp = nums[slow];
                nums[slow] = nums[fast];
                nums[fast] = temp;
                
                slow++; // Move slow pointer forward
            }
        }
    }
}
