// 151. Reverse Words in a String
// Medium
// Topics
// Companies
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"
// Example 2:

// Input: s = "  hello world  "
// Output: "world hello"
// Explanation: Your reversed string should not contain leading or trailing spaces.
// Example 3:

// Input: s = "a good   example"
// Output: "example good a"
// Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.


import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Create an instance of Main to call the reverseWords method
        Main main = new Main();
        // Call reverseWords method with a string input
        System.out.println(main.reverseWords("the sky is blue"));
    }

    public String reverseWords(String s) {
        // Trim leading and trailing spaces
        s = s.trim();
        
        // Print the value of 's' (after trimming)
        System.out.println("s: " + s);
        
        // Split by spaces and filter out empty words
        String[] words = s.split("\\s+");
        
        // Print the 'words' array
        System.out.println("words: " + Arrays.toString(words));
        
        // Reverse the words using StringBuilder
        StringBuilder result = new StringBuilder();
        for (int i = words.length - 1; i >= 0; i--) {
            result.append(words[i]);
            if (i != 0) result.append(" "); // Add space between words
        }
        return result.toString();
    }
}
