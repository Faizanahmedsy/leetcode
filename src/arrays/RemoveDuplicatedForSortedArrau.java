// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the
// duplicates in-place such that each unique element appears only once. The
// relative order of the elements should be kept the same. Then return the
// number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you
// need to do the following things:

// Change the array nums such that the first k elements of nums contain the
// unique elements in the order they were present in nums initially. The
// remaining elements of nums are not important as well as the size of nums.
// Return k.

class Solution {
    public int removeDuplicates(int[] nums) {
        // If the array is empty or has only one element, return its length
        if (nums.length == 0) {
            return 0;
        }

        // Pointer to track the position of the last unique element
        int uniqueIndex = 0;

        // Loop through the array starting from the second element
        for (int currentIndex = 1; currentIndex < nums.length; currentIndex++) {
            // If the current element is different from the last unique element
            if (nums[currentIndex] != nums[uniqueIndex]) {
                // Move the unique index forward
                uniqueIndex++;
                // Place the current element at the new unique position
                nums[uniqueIndex] = nums[currentIndex];
            }
        }

        // Return the count of unique elements
        return uniqueIndex + 1;
    }
}

/*
 * Example Walkthrough
 * Input:
 * java
 * Copy
 * Edit
 * int[] nums = {1, 1, 2, 2, 3, 4, 4, 5};
 * Process:
 * Start with i = 0 and j = 1.
 * Compare nums[i] and nums[j]. Update as follows:
 * nums[0] = 1, nums[1] = 1: No change, move j to the next index.
 * nums[0] = 1, nums[2] = 2: Increment i to 1 and set nums[1] = 2.
 * nums[1] = 2, nums[3] = 2: No change, move j to the next index.
 * nums[1] = 2, nums[4] = 3: Increment i to 2 and set nums[2] = 3.
 * Repeat for the remaining elements.
 * 
 * 
 * 
 */