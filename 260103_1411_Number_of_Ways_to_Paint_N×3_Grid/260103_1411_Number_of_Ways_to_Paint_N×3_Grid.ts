function numOfWays(n: number): number {
  // There are two pattern types for each column:
  // "aba" type (e.g., red-green-red) and "abc" type (e.g., red-green-blue).
  // For each new column added, we can derive the number of ways to paint
  // based on the previous column's patterns.
  const MOD = 1000000007;
  // Initial counts for one column
  let aba = 6,
    abc = 6;
  // Iterate from the 2nd column to the nth column
  for (let i = 2; i <= n; i++) {
    // Update counts based on the previous column's patterns
    const newAba = (aba * 3 + abc * 2) % MOD;
    // For "aba" type, we can have 3 new patterns from previous "aba"
    const newAbc = (aba * 2 + abc * 2) % MOD;
    // For "abc" type, we can have 2 new patterns from both previous types
    aba = newAba;
    // Update aba count
    abc = newAbc;
  }
  // Return the total number of ways to paint the grid
  return (aba + abc) % MOD;
}
