function maxMatrixSum(matrix: number[][]): number {
  // Initialize variables to track total sum, count of negative numbers, and minimum absolute value
  let total = 0;
  // Total sum of absolute values
  let cnt = 0;
  // Count of negative numbers
  let mn = Infinity;
  // Minimum absolute value in the matrix
  for (const row of matrix) {
    // Iterate through each element in the row
    for (let x of row) {
      // If the element is negative, increment the negative count
      if (x < 0) cnt++;
      // Add the absolute value of the element to the total sum
      total += Math.abs(x);
      // Update the minimum absolute value if the current absolute value is smaller
      mn = Math.min(mn, Math.abs(x));
    }
  }
  // If the count of negative numbers is odd, subtract twice the minimum absolute value from the total sum
  if (cnt % 2 === 1) total -= 2 * mn;
  //  Return the maximum possible sum of the matrix
  return total;
}
