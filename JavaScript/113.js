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
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    let res = [];
    const dfs = (node,target,tmp) => {
        if(!node)   return;
        tmp = [...tmp,node.val];
        if(!node.left && !node.right) {
            if(node.val === target) {
                res.push(tmp);
            }
            return;
        }
        dfs(node.left,target-node.val,tmp);
        dfs(node.right,target-node.val,tmp);
        return;
    }
    dfs(root,targetSum, []);
    return res;
};
// dfs 问题
//记录所有达到目标值的路径值
// 啊 看了题解要用slice 为什么我这样是可以的呐