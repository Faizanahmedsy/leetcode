/**
 * @param {string} s
 * @return {number}
 */

// Approach 1 - Builtin methods
var lengthOfLastWord = function (s) {
  s = s.trim();
  s = s.split(" ");

  return s[s.length - 1].length;
};

console.log(lengthOfLastWord("  hello my   name   is   FAIZAN          "));
