/***************************************
 * STACK PREREQUISITES – LEVEL 0 → 1
 * Think of stack like plates 🍽️
 * push  = put plate on top
 * pop   = remove top plate
 * peek  = look at top plate
 ***************************************/

/**
 * TASK 1: Push elements into a stack
 * Example: [1, 2, 3]
 */
function task1() {
  const stack = [];

  stack.push(1);
  stack.push(2);
  stack.push(3);

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

  // Step 1: push all characters
  for (let char of str) {
    stack.push(char);
  }

  let reversed = "";

  // Step 2: pop all characters
  while (stack.length > 0) {
    reversed += stack.pop();
  }

  return reversed;
}
console.log("Task 3:", task3());

/**
 * TASK 4: Peek the top element of stack
 * Example: [10, 20, 30] -> 30
 */
function task4() {
  const stack = [10, 20, 30];

  return stack[stack.length - 1];
}
console.log("Task 4:", task4());

/**
 * TASK 5: Check if stack is empty
 * Example: [] -> true, [1] -> false
 */
function task5() {
  const stack = [];

  return stack.length === 0;
}
console.log("Task 5:", task5());

/**
 * TASK 6: Remove last K elements from stack
 * Example: [1,2,3,4], k=2 -> [1,2]
 */
function task6() {
  const stack = [1, 2, 3, 4];
  let k = 2;

  while (k > 0) {
    stack.pop();
    k--;
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

  for (let char of str) {
    if (char === "#") {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}
console.log("Task 7:", task7());

/**
 * TASK 8: Count elements using stack pop
 * Example: [1,2,3] -> 3
 */
function task8() {
  const stack = [1, 2, 3];
  let count = 0;

  while (stack.length > 0) {
    stack.pop();
    count++;
  }

  return count;
}
console.log("Task 8:", task8());

/**
 * TASK 9: Copy stack into another stack
 * Example: [1,2,3] -> [1,2,3]
 */
function task9() {
  const stack = [1, 2, 3];
  const temp = [];
  const copy = [];

  // reverse into temp
  while (stack.length > 0) {
    temp.push(stack.pop());
  }

  // restore original & copy
  while (temp.length > 0) {
    const val = temp.pop();
    stack.push(val);
    copy.push(val);
  }

  return copy;
}
console.log("Task 9:", task9());

/**
 * TASK 10: Check if string has balanced parentheses ()
 * Example: "(())" -> true, "(()" -> false
 */
function task10(str = "(())") {
  const stack = [];

  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}
console.log("Task 10:", task10());
