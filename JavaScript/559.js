// 二叉树的最大深度推广 -》 N叉树 思路相同

/**
 * @param {Node|null} root
 * @return {number}
 */
// dfs
 var maxDepth = function(root) {
    if(!root)   return 0;
    let maxLen = 0;

    for(const child of root.children) {
        let len = maxDepth(child);
        maxLen = Math.max(maxLen, len);
    }
    return maxLen + 1;
};
// bfs
var maxDepth = function(root) {
    if(!root)   return 0;
    const queue = [root];
    let cnt = 0;
    while(queue.length != 0) {
        let len = queue.length;
        while(len--) {
            let node = queue.shift();
            for(const child of node.children) {
                queue.push(child);
            }
        }
        cnt++;
    }
    return cnt;
};