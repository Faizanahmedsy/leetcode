/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var App1hasCycle = function (head) {
  const set = new Set();
  let current = head;
  while (current != null) {
    if (set.has(current)) {
      return true;
    }
    set.add(current);
    current = current.next;
  }

  return false;
};

var App2hasCycle = function (head) {
  if (!head) return false;

  let tortoise = head; // 🐢 1 step
  let hare = head.next; // 🐇 2 steps

  while (tortoise !== hare) {
    if (!hare || !hare.next) return false; // reached end
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  return true; // cycle found
};
