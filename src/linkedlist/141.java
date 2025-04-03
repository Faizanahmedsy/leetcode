// 141. Linked List Cycle
// Easy
// Topics
// Companies
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

 

// Example 1:


// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).


/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */

public class Solution {
    public boolean hasCycle(ListNode head) {
        // Step 1: Check if the list is empty or has only one node.
        // If head is null or there is no next node, there can't be a cycle.
        if (head == null || head.next == null) {
            return false;
        }
        
        // Step 2: Initialize two pointers.
        ListNode slow = head;       // Slow pointer starts at the head.
        ListNode fast = head;       // Fast pointer also starts at the head.
        
        // Step 3: Traverse the list.
        while (fast != null && fast.next != null) {
            slow = slow.next;           // Move slow pointer one step.
            fast = fast.next.next;      // Move fast pointer two steps.
            
            // Step 4: Check if slow and fast meet.
            if (slow == fast) {
                // They met, so there is a cycle.
                return true;
            }
        }
        
        // Step 5: If we exit the loop, it means fast reached the end.
        // No cycle was found.
        return false;
    }
}