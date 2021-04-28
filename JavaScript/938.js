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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    let res = 0;
    if(!root)   return res;
    res += rangeSumBST(root.left, low, high);
    if(root.val >= low && root.val <= high) {
        res += root.val;
    }
    res += rangeSumBST(root.right, low, high);
    return res;
};

//二叉搜索树
//利用性质