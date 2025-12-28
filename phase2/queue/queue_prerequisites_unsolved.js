/**
 * QUEUE PREREQUISITES – UNSOLVED
 *
 * Queue follows FIFO (First In First Out)
 * Think: people standing in a line
 *
 * enqueue → add to end
 * dequeue → remove from front
 *
 * Time Complexity:
 * enqueue: O(1)
 * dequeue: O(1)
 * peek: O(1)
 *
 * Used in:
 * - Task scheduling
 * - BFS (graphs, trees)
 * - Sliding window problems
 * - Producer–consumer problems
 */

/**
 * TASK 1: Create a queue and enqueue elements
 * Example: enqueue 1, 2, 3 → [1, 2, 3]
 */
function task1() {
  const queue = [];

  queue.push(1);
  queue.push(2);
  queue.push(3);

  // enqueue elements here

  return queue;
}
console.log("Task 1:", task1());

/**
 * TASK 2: Dequeue the first element
 * Example: [1, 2, 3] → [2, 3]
 */
function task2() {
  const queue = [1, 2, 3];

  queue.shift();

  // remove the first element

  return queue;
}
console.log("Task 2:", task2());

/**
 * TASK 3: Peek the front element
 * Example: [10, 20, 30] → 10
 */
function task3() {
  const queue = [10, 20, 30];

  let frontElement = null;
  // get front element without removing
  frontElement = queue[0];
  return frontElement;
}
console.log("Task 3:", task3());

/**
 * TASK 4: Check if queue is empty
 * Example: [] → true, [1] → false
 */
function task4() {
  const queue = [];

  if (queue.length > 0) {
    return false;
  }

  return true;

  // return true if empty else false
}
console.log("Task 4:", task4());

/**
 * TASK 5: Process queue elements one by one
 * Example: [1,2,3] → return sum = 6
 */
function task5() {
  const queue = [12, 28, 30];
  let sum = 0;

  /**
   * We use a 'while' loop instead of a 'for' loop because .shift()
   * changes the array length on every iteration.
   * * In a for loop (i++), the index moves forward while the data
   * shifts backward, causing the loop to skip half the elements.
   */
  while (queue.length > 0) {
    const curr = queue.shift();
    sum += curr;
  }

  return sum;
}
console.log("Task 5:", task5());

/**
 * TASK 6: Simulate a simple queue operation
 *
 * Given operations:
 * ["enqueue 1", "enqueue 2", "dequeue", "enqueue 3"]
 *
 * Final queue should be: [2, 3]
 */
function task6() {
  const operations = ["enqueue 1", "enqueue 2", "dequeue", "enqueue 3"];
  const queue = [];

  queue.push(1);
  queue.push(2);
  queue.shift();
  queue.push(3);

  // simulate operations

  return queue;
}
console.log("Task 6:", task6());
