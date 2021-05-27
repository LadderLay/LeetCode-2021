//二叉树的层序遍历
 var levelOrder = function(root) {
    if(!root)
        return [];
    const res = [], queue = [root];
    while(queue.length) {
        let tmp = queue.shift();
        res.push(tmp.val);
        if(tmp.left)    queue.push(tmp.left);
        if(tmp.right)    queue.push(tmp.right);
    }
    return res;
};