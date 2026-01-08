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

function maxProduct(root: TreeNode | null): number {
  // Calculate the total sum of all nodes in the binary tree
  const MOD = 1_000_000_007;
  // Initialize variables to track total sum and best product found
  let total = 0,
    best = 0;

  // Helper function to compute the sum of a subtree rooted at the given node
  const sum = (node: TreeNode | null): number => {
    // Base case: if the node is null, return 0
    if (!node) return 0;
    // Return the sum of the current node's value and the sums of its left and right subtrees
    return node.val + sum(node.left) + sum(node.right);
  };

  // Compute the total sum of the entire tree
  total = sum(root);
  // Helper function to perform DFS and find the maximum product of split subtrees
  const dfs = (
    node: TreeNode | null
    // Returns the sum of the subtree and updates the best product found
  ): number => {
    // Base case: if the node is null, return 0
    if (!node) return 0;
    // Calculate the sum of the current subtree
    const s = node.val + dfs(node.left) + dfs(node.right);
    // Update the best product found by considering the split at this subtree
    best = Math.max(best, s * (total - s));
    return s;
  };
  // Start DFS from the root to find the maximum product
  dfs(root);
  // Return the best product modulo MOD
  return best % MOD;
}
