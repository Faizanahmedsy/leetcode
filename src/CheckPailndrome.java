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
