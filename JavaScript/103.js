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
 * @return {number[][]}
 */
 var zigzagLevelOrder = function(root) {
    let res = [], stack = [root], tag = true;
    if(!root)   return res;
    while(stack.length != 0) {
        let n = stack.length, tmp = [];
        for(let i=0; i<n; ++i) {
            let node = stack.shift();
            if(tag) tmp.push(node.val);
            else    tmp.unshift(node.val);
            if(node.left)   stack.push(node.left);
            if(node.right)  stack.push(node.right);
        }
        res.push(tmp);
        tag = !tag;
    }
    return res;
};