/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 翻转二叉树
 var mirrorTree = function(root) {
    if(!root)   return null;
    if(!root.left && !root.right)   return root;
    let left = mirrorTree(root.left);
    let right = mirrorTree(root.right);
    root.left = right;
    root.right = left;
    return root;
};