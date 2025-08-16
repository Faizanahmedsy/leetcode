/**
 * @param {string} s
 * @return {number}
 */

// Approach 1 - Builtin methods
var app1lengthOfLastWord = function (s) {
  s = s.trim();
  s = s.split(" ");

  return s[s.length - 1].length;
};

var app2lengthOfLastWord = function (s) {
  s = s.trim();
  s = s.split(" ");

  return s[s.length - 1].length;
};

/**
 * @param {string} s
 * @return {number}
 */
var app2lengthOfLastWord = function (s) {
  // start from end
  let n = s.length - 1;

  while (n >= 0) {
    if (s[n] === " ") {
      --n;
    } else {
      break;
    }
  }

  let count = 0;
  while (n >= 0) {
    if (s[n] != " ") {
      --n;
      ++count;
    } else {
      break;
    }
  }

  return count;
};

var app3lengthOfLastWord = function (s) {
  // Initialize count to 0
  let count = 0;

  // Trim trailing spaces
  s = s.trim();

  // Iterate from the end of the string
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      count++;
    } else {
      break;
    }
  }

  return count;
};

console.log(app2lengthOfLastWord("  hello my   name   is   FAIZAN          "));
