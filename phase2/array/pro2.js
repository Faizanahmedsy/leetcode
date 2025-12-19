// PHASE 1: LOOP → PATTERN → LOGIC
// TASK 16 — PALINDROME CHECK (CORE PROBLEM)

function task16(str = "racecar") {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// ALID PALINDROME (IGNORE NON-LETTERS)
function task17(str = "A man, a plan, a canal: Panama") {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    let char1 = str[left].toLowerCase();
    let char2 = str[right].toLowerCase();

    if ((char1 >= "a" && char1 <= "z") || (char1 >= "0" && char1 <= "9")) {
    } else {
      left++;
      continue;
    }

    if ((char2 >= "a" && char2 <= "z") || (char2 >= "0" && char2 <= "9")) {
    } else {
      right--;
      continue;
    }

    if (char1 !== char2) return false;

    left++;
    right--;
  }

  return true;
}

console.log(task17());
