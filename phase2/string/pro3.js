function task1(str = "1.2.3") {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char != ".") {
      result += str[i];
    } else {
      result += "-";
    }
  }

  return result;
}

function task2(str = "hello world") {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char != " ") {
      result += str[i];
    } else {
      result += "_";
    }
  }

  return result;
}

// Remove all vowels
function task3(str = "apple") {
  const vowels = ["a", "e", "i", "o", "u"];

  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (vowels.includes(char)) {
      continue;
    } else {
      result += char;
    }
  }

  return result;
}

// Replace all lowercase letters with "*"
function task3(str = "aBcdE") {}

// Replace every 'a' with 'z'

// Replace digits with '#'

// Replace "cat" with "dog"

// Replace first space only with "-"

// Replace "()” with "o"

// Build a new string with only uppercase letters

console.log(task2());
