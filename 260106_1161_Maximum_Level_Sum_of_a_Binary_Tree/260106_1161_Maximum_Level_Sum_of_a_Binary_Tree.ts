// Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxLevelSum(root: TreeNode | null): number {
  // Use a queue to perform level-order traversal of the binary tree
  let q: TreeNode[] = [root!];
  // Initialize variables to track the current level, answer level, and maximum sum
  let level = 1,
    ans = 1;
  // Start from level 1
  let maxSum = -Infinity;

  // Traverse the tree level by level
  while (q.length) {
    // Get the number of nodes at the current level
    let size = q.length;
    // Initialize the sum for the current level
    let sum = 0;
    // Process all nodes at the current level
    for (let i = 0; i < size; i++) {
      // Dequeue the front node
      let node = q.shift()!;
      // Add the node's value to the current level sum
      sum += node.val;
      // Enqueue the left and right children if they exist
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    // Update the maximum sum and answer level if the current level sum is greater
    if (sum > maxSum) {
      // Found a new maximum sum
      maxSum = sum;
      // Update the answer level
      ans = level;
    }
    // Move to the next level
    level++;
  }
  // Return the level with the maximum sum
  return ans;
}
