/**
 * HASHMAP PREREQUISITES – UNSOLVED
 *
 * Key → Value mapping
 *
 * Time Complexity:
 * get/set: O(1) average
 *
 * Used in:
 * - Frequency counting
 * - Lookups
 * - Grouping
 */

/**
 * TASK 1: Count frequency
 */
function task1() {
  const arr = [1, 1, 2, 3, 1];
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    map.set(curr, (map.get(curr) || 0) + 1);
  }

  return map;
}
console.log("Task 1:", task1());

/**
 * TASK 2: First repeated element
 */
function task2() {
  const arr = [2, 1, 3, 5, 1, 3];
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    if (map.has(cur)) {
      return cur;
    } else {
      map.set(cur, 1);
    }
  }
}
console.log("Task 2:", task2());

/**
 * TASK 3: Two sum
 */
function task3(target = 9) {
  const arr = [2, 7, 11, 15];
  const seen = new Map();

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    let remaining = target - cur;

    if (seen.has(remaining)) {
      return [remaining, cur];
    } else {
      seen.set(cur, true);
    }

    // console.log(remaining, "remaining");
    // console.log(cur, "cur");

    // if (remaining + cur === target) {
    //   result.push(remaining);
    //   result.push(cur);
    //   return result;
    // }
  }

  // for (let i = 0; i < arr.length; i++) {
  //   const cur = arr[i];
  //   if (map.has(cur)) {
  //     result.push(map.get(cur));
  //     result.push(cur);
  //     return result;
  //   }
  // }
  return false;
}
console.log("Task 3:", task3());

/**
 * TASK 4: Check duplicates
 */
function task4() {
  const arr = [1, 2, 3, 5, 12, 5];
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];

    if (map.has(curr)) {
      return true;
    } else {
      map.set(curr, 1);
    }
  }

  return false;
}
console.log("Task 4:", task4());

/**
 * TASK 5: Group anagrams
 */
function task5() {
  const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const hashMap = new Map();
  const strArr = [];
  for (let i = 0; i < strs.length; i++) {
    const cur = strs[i];
    const stringKey = cur.split("").sort().join("");
    // hashMap.set(stringKey, cur);

    if (hashMap.has(stringKey)) {
      const key = stringKey;
      const curValue = hashMap.get(stringKey);
      curValue.push(cur);
      console.log("curValue", curValue);
      // hashMap.set(stringKey, curValue.push(cur));
    } else {
      const key = stringKey;
      const value = [cur];
      hashMap.set(key, value);
    }
  }

  // for ( let [key, value] of hashMap){

  // }
  console.log(hashMap, "hashMap");
  return Array.from(hashMap.values());
}
console.log("Task 5:", task5());

/**
 * TASK 6: Character frequency map
 */
function task6(str = "hello") {
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    const cur = str[i];
    map.set(cur, (map.get(cur) || 0) + 1);
  }

  return map;
}
console.log("Task 6:", task6());
