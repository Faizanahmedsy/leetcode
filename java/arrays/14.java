// 14. Longest Common Prefix
// Easy
// Topics
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return ""; // If list is empty, return ""

        String prefix = strs[0]; // Start with the first word

        for (String word : strs) { // Go through each word in the list
            while (!word.startsWith(prefix)) { // If the word doesn’t start with prefix
                prefix = prefix.substring(0, prefix.length() - 1); // Remove last letter from prefix
                if (prefix.isEmpty()) return ""; // If prefix becomes empty, return ""
            }
        }

        return prefix; // Return the final common prefix
    }
}
