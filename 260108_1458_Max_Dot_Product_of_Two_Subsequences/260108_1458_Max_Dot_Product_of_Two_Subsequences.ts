function maxDotProduct(nums1: number[], nums2: number[]): number {
  // dp[i][j] represents the maximum dot product we can get using first i elements from nums1 and first j elements from nums2
  const n = nums1.length,
    m = nums2.length;
  // Initialize dp array with very small numbers to handle negative products
  const NEG = -1e9;
  // dp array
  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    Array(m + 1).fill(NEG)
  );
  // Base case: dp[0][0] = 0
  for (let i = 1; i <= n; i++) {
    // Iterate through nums2
    for (let j = 1; j <= m; j++) {
      // Calculate the product of the current elements
      const prod = nums1[i - 1] * nums2[j - 1];
      // Update dp[i][j] with the maximum of the four scenarios
      dp[i][j] = Math.max(
        prod,
        dp[i - 1][j],
        dp[i][j - 1],
        dp[i - 1][j - 1] + prod
      );
    }
  }
  return dp[n][m];
}
