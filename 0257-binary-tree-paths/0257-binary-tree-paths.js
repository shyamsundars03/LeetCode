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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
     let res = [];

    function dfs(node, path) {
        if (!node) return;

        // build current path
        path += node.val.toString();

        // if it's a leaf, push the path
        if (!node.left && !node.right) {
            res.push(path);
            return;
        }

        // otherwise, continue DFS
        if (node.left) dfs(node.left, path + "->");
        if (node.right) dfs(node.right, path + "->");
    }

    dfs(root, "");
    return res;

};