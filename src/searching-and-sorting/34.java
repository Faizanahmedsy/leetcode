// 34. Find First and Last Position of Element in Sorted Array
// Medium
// Topics
// Companies
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]


class Solution {
    public int[] searchRange(int[] nums, int target) {
        int first = findFirst(nums, target);
        int last = findLast(nums, target);
        return new int[]{first, last};
    }

    // Function to find the first occurrence of target
    private int findFirst(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int firstIndex = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;  // Middle index

            if (nums[mid] == target) { 
                firstIndex = mid;  // Found a match, store it
                right = mid - 1;   // Keep searching on the left side for first occurrence
            } 
            else if (nums[mid] < target) {
                left = mid + 1;  // Move right
            } 
            else {
                right = mid - 1; // Move left
            }
        }
        return firstIndex;  // Return first position
    }

    // Function to find the last occurrence of target
    private int findLast(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        int lastIndex = -1;

        while (left <= right) {
            int mid = left + (right - left) / 2;  // Middle index

            if (nums[mid] == target) { 
                lastIndex = mid;  // Found a match, store it
                left = mid + 1;   // Keep searching on the right side for last occurrence
            } 
            else if (nums[mid] < target) {
                left = mid + 1;  // Move right
            } 
            else {
                right = mid - 1; // Move left
            }
        }
        return lastIndex;  // Return last position
    }
}
