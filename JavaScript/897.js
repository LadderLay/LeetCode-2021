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
 * @return {TreeNode}
 */


 var increasingBST = function(root) {
    let p = dum = new TreeNode(-1);
    dfs(root);
    return dum.right;

    function dfs(node) {
        if(!node)  return;
        dfs(node.left);
        p.right = new TreeNode(node.val);
        p = p.right;
        dfs(node.right);
    }
};
