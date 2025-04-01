// 704. Binary Search
// Easy
// Topics
// Companies
// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

class Solution {
    public int search(int[] nums, int target) {
        int left = 0; // Start from the first index
        int right = nums.length - 1; // End at the last index

        while (left <= right) { // Keep searching while left is before or at right
            int mid = left + (right - left) / 2; // Calculate mid index
            
            if (nums[mid] == target) { // If mid element is the target
                return mid; // Found the target, return the index
            } 
            else if (nums[mid] < target) { // If target is greater, move to the right half
                left = mid + 1;
            } 
            else { // If target is smaller, move to the left half
                right = mid - 1;
            }
        }

        return -1; // Target not found
    }
}
