const num = 1234;

function reverseNum(num) {
  let rev = 0;

  /*
   * ╔════════════════════════╗
   * ║  While Loop Version  ║
   * ╚════════════════════════╝
   */
  while (num > 0) {
    let last = num % 10; // Get last digit
    console.log("🚀 ~ reverseNum ~ last:", last);
    rev = 10 * rev + last; // Add digit to reversed number
    console.log("🚀 ~ reverseNum ~ rev:", rev);
    num = Math.floor(num / 10); // Remove last digit (important!)
    console.log("🚀 ~ reverseNum ~ num:", num);
  }

  /*
   * ╔════════════════════╗
   * ║  FOR LOOP VERSION  ║
   * ╚════════════════════╝
   */
  //   for (; num > 0; num = Math.floor(num / 10)) {
  //     let last = num % 10; // Get last digit
  //     console.log("🚀 ~ reverseNum ~ last:", last);
  //     rev = 10 * rev + last; // Add digit to reversed number
  //     console.log("🚀 ~ reverseNum ~ rev:", rev);
  //     console.log("🚀 ~ reverseNum ~ num:", num); // Current num before it updates in next loop
  //   }

  return rev;
}

console.log(reverseNum(1234)); // Output: 4321
