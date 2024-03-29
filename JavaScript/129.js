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
 var sumNumbers = function(root) {
    function dfs(node, pre) {
        if(!node)
            return 0;
        if(!node.left && !node.right) {
            return pre * 10 + node.val;
        }
        let tmp = pre * 10 + node.val;
        return dfs(node.left, tmp) + dfs(node.right, tmp);
    }
    return dfs(root,0);
};

var sumNumbers = function(root) {
    const dfs = (node, val) => {
        if(!node)   
            return 0;
        val = val * 10 + node.val;
        if(!node.left && !node.right)
            return val;
        return dfs(node.left, val) + dfs(node.right, val);
    }
    return dfs(root, 0);
};