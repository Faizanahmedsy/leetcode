/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let odd = head; // Points to the first odd node
  let even = head.next; // Points to the first even node
  let evenHead = even;
  while (even !== null && even.next !== null) {
    // Connect odd node to the next odd node (skip the even node)
    // odd.next = even.next;
    // odd = odd.next;          // Move odd pointer to the next odd node

    // // Connect even node to the next even node (skip the odd node)
    // even.next = odd.next;
    // even = even.next;        // Move even pointer to the next even node

    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};
