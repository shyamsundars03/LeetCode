/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var averageOfSubtree = function(root) {
    
  let count = 0;

  function dfs(node) {
    if (!node) return [0, 0]; 

    let [lsum, lcount] = dfs(node.left);
    let [rsum, rcount] = dfs(node.right);

    let sum = lsum + rsum + node.val;
    let num = lcount + rcount + 1;

    if (Math.floor(sum / num) === node.val) {
      count++;
    }
    return [sum, num];
  }

  dfs(root);
  return count;


};