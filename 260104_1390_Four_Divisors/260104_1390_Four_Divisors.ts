function sumFourDivisors(nums: number[]): number {
  // Helper function to calculate the sum of divisors if there are exactly four divisors
  const divSumFour = (n: number): number => {
    // Count divisors and calculate their sum
    let sum = 0,
      cnt = 0;
    //  Check divisors up to the square root of n
    for (let i = 1; i * i <= n; i++) {
      // If i is not a divisor, skip
      if (n % i !== 0) continue;
      // i is a divisor
      cnt++;
      // Add the divisor to the sum
      sum += i;
      // Check for the complementary divisor
      const other = Math.floor(n / i);
      // Avoid double counting the square root if n is a perfect square
      if (other !== i) {
        // other is also a divisor
        cnt++;
        // Add the complementary divisor to the sum
        sum += other;
      }
      // If more than 4 divisors found, return 0 early
      if (cnt > 4) return 0;
    }
    // Return the sum if there are exactly 4 divisors, otherwise return 0
    return cnt === 4 ? sum : 0;
  };

  // Accumulate the sum of divisors for all numbers in the input array
  let res = 0;
  // Iterate through each number in the input array
  for (const n of nums) {
    // Add the sum of divisors (if exactly 4) to the result
    res += divSumFour(n);
  }
  // Return the final accumulated result
  return res;
}
