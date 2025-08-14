import java.util.*;

public class CodeRunner {
    public static void main(String[] args) {
        // Call the findMaxConsecutiveOnes method with an array
        System.out.println(findMaxConsecutiveOnes(new int[]{1, 0, 1, 1,1}));
    }

    // Define the method outside of main
    public static int findMaxConsecutiveOnes(int[] nums) {
        int maxCount = 0;
        int currentCount = 0;

        for (int num : nums) {
            if (num == 1) {
                currentCount++;  
                maxCount = Math.max(maxCount, currentCount);
            } else {
                currentCount = 0;
            }
        }

        return maxCount;
    }
}
