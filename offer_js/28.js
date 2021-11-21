/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    const isEqual = (l, r) => {
        if(!l && !r)    return true;
        if((!l || !r) || l.val !== r.val)   return false;
        return isEqual(l.left, r.right) && isEqual(l.right, r.left);
    }
    if(!root)   return true;
    return isEqual(root.left, root.right);
};