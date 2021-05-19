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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    if(root.val === x || root.val === y)    
        return false;

    const dfs = (preNode, node, val, depth) => {
        if(!node) {
            return null;
        }
        if(node.val !== val && !node.left && !node.right) {
            return null;
        }
        if(node.val === val) {
            return [preNode, depth+1];
        }
        return dfs(node, node.left, val, depth+1) || dfs(node, node.right, val, depth+1);
    }

    let [xpre,xdepth] = dfs(null,root,x,0);
    let [ypre,ydepth] = dfs(null,root,y,0);
    if(xpre !== ypre && xdepth === ydepth)
        return true;
    return false;


};
// 还是比较常规的dfs 
// 感觉自己的实现不是很好， 之后再改进一下