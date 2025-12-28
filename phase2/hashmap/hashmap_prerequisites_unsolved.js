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
function task3(target = 19) {
  const arr = [2, 7, 11, 15];
  const result = [];
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    let remaining = target - cur;

    if (map.has(remaining)) {
      return [remaining, cur];
    } else {
      map.set(cur, remaining);
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

  console.log(map, "map");
}
console.log("Task 3:", task3());

/**
 * TASK 4: Check duplicates
 */
function task4() {
  const arr = [1, 2, 3, 1];
}
console.log("Task 4:", task4());

/**
 * TASK 5: Group anagrams
 */
function task5() {
  const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
}
console.log("Task 5:", task5());

/**
 * TASK 6: Character frequency map
 */
function task6(str = "hello") {}
console.log("Task 6:", task6());
