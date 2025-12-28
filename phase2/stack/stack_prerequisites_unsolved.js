/***************************************
 * STACK PREREQUISITES – UNSOLVED
 * Fill the logic yourself
 ***************************************/

/**
 * TASK 1: Push elements into a stack
 * Example: [1, 2, 3]
 */
function task1() {
  const stack = [];

  for (let i = 0; i < 3; i++) {
    stack.push(i + 1);
  }

  return stack;
}
console.log("Task 1:", task1());

/**
 * TASK 2: Pop the top element from a stack
 * Example: [1, 2, 3] -> [1, 2]
 */
function task2() {
  const stack = [1, 2, 3];
  stack.pop();
  return stack;
}
console.log("Task 2:", task2());

/**
 * TASK 3: Reverse a string using a stack
 * Example: "abc" -> "cba"
 */
function task3(str = "abc") {
  const stack = [];

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    stack.push(char);
  }
  return stack.join("");
}
console.log("Task 3:", task3());

/**
 * TASK 4: Peek the top element of stack
 * Example: [10, 20, 30] -> 30
 */
function task4() {
  const stack = [10, 20, 30];
  let peekElement = null;
  peekElement = stack.pop();
  return peekElement;
}
console.log("Task 4:", task4());

/**
 * TASK 5: Check if stack is empty
 * Example: [] -> true, [1] -> false
 */
function task5() {
  const stack = [];
  if (stack.length === 0) {
    return true;
  }

  return false;
}
console.log("Task 5:", task5());

/**
 * TASK 6: Remove last K elements from stack
 * Example: [1,2,3,4], k=2 -> [1,2]
 */
function task6(k = 2) {
  const stack = [1, 2, 3, 4];

  for (let i = 1; i <= k; i++) {
    stack.pop();
  }

  return stack;
}
console.log("Task 6:", task6());

/**
 * TASK 7: Build string using stack (simulate typing)
 * "#" means backspace
 * Example: "ab#c" -> "ac"
 */
function task7(str = "ab#c") {
  const stack = [];

  return stack.join("");
}
console.log("Task 7:", task7());

/**
 * TASK 8: Count elements using stack pop
 * Example: [1,2,3] -> 3
 */
function task8() {}
console.log("Task 8:", task8());

/**
 * TASK 9: Copy stack into another stack
 * Example: [1,2,3] -> [1,2,3]
 */
function task9() {}
console.log("Task 9:", task9());

/**
 * TASK 10: Check if string has balanced parentheses ()
 * Example: "(())" -> true, "(()" -> false
 */
function task10(str = "(())") {}
console.log("Task 10:", task10());
