public class CheckPailndrome {


    public static void main(String[] args) {
        int x = 121; // Example input
        System.out.println(isPalindrome(x)); // Should print: true

        x = -121; // Example input
        System.out.println(isPalindrome(x)); // Should print: false

        x = 10; // Example input
        System.out.println(isPalindrome(x)); // Should print: false
    }

    public static boolean isPalindrome(int x) {
        // Step 2: Check for negativity
        if (x < 0) {
            return false;
        }

        // Step 4: Store the original value
        int original = x;
        int reversed = 0;

        // Step 5: Reverse the digits
        while (x != 0) {
            int digit = x % 10;
            reversed = reversed * 10 + digit;
            x = x / 10;
        }

        // Step 6: Compare the reversed number with the original
        return reversed == original;
    }
}

//
//    To determine if a given integer \( x \) is a palindrome, you can follow these steps:
//
//        1. **Negative Check**: If \( x \) is negative, return `false` since negative numbers cannot be palindromes.
//        2. **Reversal Method**: Reverse the integer and compare it with the original number.
//        - Extract the digits of the number from the end and build the reversed number.
//        - Compare the original number with the reversed number.
//
//        Here's the pseudo code for this approach:
//
//        1. **Input**: An integer \( x \).
//        2. **Check for negativity**:
//        - If \( x < 0 \), return `false`.
//        3. **Initialize a variable** to store the reversed number (let's call it `reversed = 0`).
//        4. **Store the original value** of \( x \) in another variable (let's call it `original = x`).
//        5. **Reverse the digits**:
//        - While \( x \) is not zero:
//        - Extract the last digit of \( x \) (`digit = x % 10`).
//        - Append the digit to the reversed number (`reversed = reversed * 10 + digit`).
//        - Remove the last digit from \( x \) (`x = x // 10`).
//        6. **Compare the reversed number with the original**:
//        - If `reversed == original`, return `true`.
//        - Otherwise, return `false`.
//
//        Here is the pseudo code:
//
//        ```
//        function isPalindrome(x):
//        if x < 0:
//        return false
//
//        original = x
//        reversed = 0
//
//        while x != 0:
//        digit = x % 10
//        reversed = reversed * 10 + digit
//        x = x // 10
//
//        if reversed == original:
//        return true
//        else:
//        return false
//        ```
//
//        This algorithm works in \( O(n) \) time complexity, where \( n \) is the number of digits in the integer, and uses \( O(1) \) extra space.