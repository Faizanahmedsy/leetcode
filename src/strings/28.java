// 28. Find the Index of the First Occurrence in a String
// Easy
// Topics
// Companies
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

 

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

class Solution {
    public int strStr(String haystack, String needle) {
        // If the needle is an empty string, return 0 as per the problem statement
        if (needle.isEmpty()) {
            return 0;
        }

        // Use indexOf to find the first occurrence of the needle in haystack
        return haystack.indexOf(needle);
    }
}
