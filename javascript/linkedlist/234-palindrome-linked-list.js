/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // Handle edge cases: empty list or single node
  if (!head || !head.next) {
    return true;
  }

  // Step 1: Find the middle of the linked list
  let slowPointer = head;
  let fastPointer = head;
  while (fastPointer.next !== null && fastPointer.next.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  // Step 2: Reverse the second half of the list
  let prev = null;
  let curr = slowPointer.next; // Start from the node after the middle
  while (curr !== null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // Step 3: Compare the first half with the reversed second half
  let firstHalf = head;
  let secondHalf = prev;
  while (secondHalf !== null) {
    if (firstHalf.val !== secondHalf.val) {
      return false;
    }
    firstHalf = firstHalf.next;
    secondHalf = secondHalf.next;
  }

  return true;
};
