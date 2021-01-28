/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
//平衡二叉树
//1-自顶向下递归
//缺点：存在子树重复判断的情况:对于同一个节点，maxDepth()会被重复调用
/*
时间复杂度：O(n^2)
空间复杂度：O(n)
*/
class Solution {
public:
    bool isBalanced(TreeNode* root) {
        if(root == NULL)
            return true;
        return abs(maxDepth(root->left) - maxDepth(root->right)) <= 1 && isBalanced(root->left) && isBalanced(root->right);
    }
    int maxDepth(TreeNode* root) {
        if(root == NULL)
            return 0;
        return 1 + max(maxDepth(root->left), maxDepth(root->right));
    }
};

//2-自底向上进行递归
//类比 后续遍历的思路 开销更小 左右子树不平衡时返回-1
class Solution {
public:
    bool isBalanced(TreeNode* root) {
        return height(root) >= 0;
    }
    int height(TreeNode* root) {
        if(root == NULL)
            return 0;
        int left = height(root->left);
        int right = height(root->right);
        if(left == -1 || right == -1 || abs(left-right) > 1) 
            return -1;
        return max(left, right) + 1;
    }
};