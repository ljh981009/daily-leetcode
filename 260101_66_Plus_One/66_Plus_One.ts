function plusOne(digits: number[]): number[] {
  // Iterate from the last digit to the first
  for (let i = digits.length - 1; i >= 0; i--) {
    // If the current digit is not 9, simply increment it and return the array
    if (digits[i] !== 9) {
      // Increment the digit
      digits[i]++;
      // Return the modified array
      return digits;
    }
    // If the digit is 9, set it to 0 and continue to the next digit
    digits[i] = 0;
  }
  // If all digits were 9, we need to add a new digit at the front
  digits.unshift(1);
  // Return the modified array
  return digits;
}
