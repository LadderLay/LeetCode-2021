/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
    const isSub = (a, b) => {
        if(b == null)    return true;
        if(a == null || a.val != b.val)    return false;
        return isSub(a.left, b.left) && isSub(a.right, b.right);
    }
    if(A == null || B == null)    return false;
    return isSub(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};