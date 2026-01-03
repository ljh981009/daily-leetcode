function repeatedNTimes(nums: number[]): number {
  // Create a set to track seen elements
  const set = new Set<number>();
  // Iterate through each number in the array
  for (const x of nums) {
    // If the number is already in the set, it's the repeated element
    if (set.has(x)) return x;
    // Otherwise, add the number to the set
    set.add(x);
  }
  // If no repeated element is found (theoretically shouldn't happen), return -1
  return -1;
}
