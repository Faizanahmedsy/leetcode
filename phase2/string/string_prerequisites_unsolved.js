/**
 * STRING PREREQUISITES – UNSOLVED
 *
 * Strings are immutable in JavaScript
 * (you cannot modify them in place)
 *
 * Time Complexity:
 * Traversal: O(n)
 *
 * Used in:
 * - Two pointers
 * - Palindrome problems
 * - Frequency counting
 * - Parsing
 */

/**
 * TASK 1: Reverse a string
 * Pattern: Build new string
 * Example: "abc" → "cba"
 */
function task1(str = "abc") {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    newStr += char;
  }

  return newStr;
}
console.log("Task 1:", task1());

/**
 * TASK 2: Check if string is palindrome
 * Pattern: Two pointers
 * Example: "madam" → true
 */
function task2(str = "madam") {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    console.log("left", left);
    console.log("right", right);

    if (str[left] !== str[right]) {
      console.log("str[left]", str[left]);
      console.log("str[right]", str[right]);

      return false;
    }

    left++;
    right--;
  }
  return true;
}
console.log("Task 2:", task2());

/**
 * TASK 3: Count vowels in a string
 * Pattern: Accumulator
 * Example: "hello" → 2
 */
function task3(str = "hello") {
  const vowels = ["a", "e", "i", "o", "u"];
  let numOfVowels = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char)) {
      numOfVowels += 1;
    }
  }
  return numOfVowels;
}
console.log("Task 3:", task3());

/**
 * TASK 4: Remove spaces from string
 * Pattern: Build new string
 * Example: "a b c" → "abc"
 */
function task4(str = "a b c") {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char != " ") {
      newStr += char;
    }
  }

  return newStr;
}
console.log("Task 4:", task4());

/**
 * TASK 5: First non-repeating character
 * Pattern: Frequency + traversal
 * Example: "leetcode" → "l"
 */
function task5(str = "leetcode") {
  const map = new Map();

  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of str) {
    if (map.get(char) === 1) {
      return char;
    }
  }

  return null;
}

console.log("Task 5:", task5());

/**
 * TASK 6: Valid anagram
 * Pattern: Frequency comparison
 * Example: "anagram", "nagaram" → true
 */

function task6(s = "anagram", t = "nagaram") {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    if (!map.get(char)) {
      return false;
    }

    map.set(char, map.get(char) - 1);
  }

  return true;
}

console.log("Task 6:", task6());
