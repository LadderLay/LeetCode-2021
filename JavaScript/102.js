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
// 层序遍历二叉树
// binary tree
// level 水平的

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


 var levelOrder = function(root) {
    let res = [];
    if(!root)   return res;
    let stack = [root];
    while(stack.length !== 0) {
        res.push([]);
        let len = stack.length;
        for(let i=0; i<len; ++i) {
            const node = stack.shift();
            if(node.left)   stack.push(node.left);
            if(node.right)  stack.push(node.right);
            res[res.length-1].push(node.val);
        }
    }
    return res;
};