/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 var leafSimilar = function(root1, root2) {
    let leaf1 = [];
    let leaf2 = [];

    const dfs = (node, arr) => {
        if(!node.left && !node.right) {
            arr.push(node.val);
            return;
        }
        if(node.left)   dfs(node.left, arr);
        if(node.right)  dfs(node.right, arr);
    }

    if(root1)   dfs(root1, leaf1);
    if(root2)   dfs(root2, leaf2);
    if(leaf1.length === leaf2.length) {
        for(let i=0; i<leaf1.length; ++i) {
            if(leaf1[i] !== leaf2[i]) {
                return false;
            }
        }
        return true;
    }
    return false;
};
