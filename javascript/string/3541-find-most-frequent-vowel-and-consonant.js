// /**
//  * @param {string} s
//  * @return {number}
//  */
// var maxFreqSum = function (s) {
//   const vowels = new Set(["a", "e", "i", "o", "u"]);
//   const counts = {};

//   // Step 1: count frequency of all letters
//   for (let i = 0; i < s.length; i++) {
//     let char = s[i];
//     counts[char] = (counts[char] || 0) + 1;
//   }

//   // Step 2: find max vowel frequency
//   let maxVowel = 0;
//   let maxConsonant = 0;

//   for (let char in counts) {
//     if (vowels.has(char)) {
//       maxVowel = Math.max(maxVowel, counts[char]);
//     } else {
//       maxConsonant = Math.max(maxConsonant, counts[char]);
//     }
//   }

//   return maxVowel + maxConsonant;
// };

var maxFreqSum = function (s) {
  let hashTable = {};

  for (let i = 0; i < s.length; i++) {
    if (hashTable[s[i]]) {
      hashTable[s[i]]++;
    } else {
      hashTable[s[i]] = 1;
    }
  }

  const vowels = ["a", "e", "i", "o", "u"];
  const maxVowel = 0;
  const maxConsonant = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      if (hashTable[s[i]] > maxVowel) {
        maxVowel = hashTable[s[i]];
      }
    } else {
      if (hashTable[s[i]] > maxConsonant) {
        maxConsonant = hashTable[s[i]];
      }
    }
  }

  console.log(hashTable); // just to see counts
};
