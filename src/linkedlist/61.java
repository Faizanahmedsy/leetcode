// 61. Rotate List
// Solved
// Medium
// Topics
// Companies
// Given the head of a linked list, rotate the list to the right by k places.

 

// Example 1:


// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        // Edge case: empty list or single node
        if (head == null || head.next == null || k == 0) {
            return head;
        }

        // Step 1: Find the length of the list
        ListNode current = head;
        int length = 1;
        while (current.next != null) {
            current = current.next;
            length++;
        }

        // Step 2: Normalize k to be within the range [0, length - 1]
        k = k % length;
        if (k == 0) {
            return head; // No rotation needed
        }

        // Step 3: Make the list circular by connecting the tail to the head
        current.next = head;

        // Step 4: Find the new tail (n - k - 1-th node) and new head (n - k-th node)
        ListNode newTail = head;
        for (int i = 1; i < length - k; i++) {
            newTail = newTail.next;
        }

        ListNode newHead = newTail.next;

        // Step 5: Break the circular link by setting the new tail's next to null
        newTail.next = null;

        // Step 6: Return the new head of the rotated list
        return newHead;
    }
}
