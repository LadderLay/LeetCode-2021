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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    const dfs = (node, target) => {
        if(!node)
            return false;
        if(!node.left && !node.right) {
            if(node.val === target) return true;
            return false;
        }
        let [v1,v2] = [false,false];
        if(node.left)   v1 = dfs(node.left, target-node.val);
        if(node.right)  v2 = dfs(node.right, target-node.val);
        return v1 || v2;
    }
    return dfs(root, targetSum);
};

// 百度一面面试题

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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if(!root)
        return false;
    if(!root.left && !root.right) {
        if(root.val === targetSum) return true;
        return false;
    }
    return hasPathSum(root.left, targetSum-root.val) || 
           hasPathSum(root.right, targetSum-root.val);

};

//丑陋的代码 -> 优化
//