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
 var levelOrder = function(root) {
    if(!root)
        return [];
    let res = [];
    let q = [root];
    while(q.length > 0) {
        let tmp = [];
        let len = q.length;
        for(let i=0; i<len; ++i) {
            let node = q.shift();
            tmp.push(node.val);
            if(node.left)   q.push(node.left);
            if(node.right)   q.push(node.right);
        }
        res.push(tmp)
    }
    return res;

};