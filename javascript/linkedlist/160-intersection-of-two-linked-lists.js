//  Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Helper function to create a linked list from an array
 * @param {number[]} arr
 * @return {ListNode}
 */
function createLinkedList(arr) {
  if (!arr || arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const hashTable = new Set();
  let currOfListB = headB;

  // Populate hashtable with nodes from headB
  while (currOfListB != null) {
    hashTable.add(currOfListB);
    currOfListB = currOfListB.next;
  }

  let currOfListA = headA;

  while (currOfListA != null) {
    if (hashTable.has(currOfListA)) {
      return currOfListA;
    }

    currOfListA = currOfListA.next;
  }
};

// Test with arrays converted to linked lists
const listA = createLinkedList([4, 1, 8, 4, 5]);
const listB = createLinkedList([5, 6, 1, 8, 4, 5]);
console.log("Calling getIntersectionNode:");
getIntersectionNode(listA, listB);
