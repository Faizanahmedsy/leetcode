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
function task4(str = "aBcdE") {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char >= "a" && char <= "z") {
      result += "*";
    } else {
      result += char;
    }
  }

  return result;
}

// Replace every 'a' with 'z'
function task5(str = "banana") {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char == "a") {
      result += "z";
    } else {
      result += char;
    }
  }

  return result;
}

// Replace digits with '#'

function task6(str = "a1b2c3") {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (Number.isFinite(Number(char))) {
      result += "#";
    } else {
      result += char;
    }
  }

  return result;
}

console.log(task6());

// Replace "cat" with "dog"

function task7(str = "catapuit") {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (
      str[i].toLowerCase() == "c" &&
      str[i + 1].toLowerCase() == "a" &&
      str[i + 2].toLowerCase() == "t"
    ) {
      result += "dog";
      i + 2;
      continue;
    } else {
      result += char;
    }
  }

  return result;
}

console.log(task7());

// Replace first space only with "-"

// Replace "()” with "o"

// Build a new string with only uppercase letters
