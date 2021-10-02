// 二叉树的前序遍历
class Solution {
public:
    void preorder(TreeNode* node, vector<int>& res) {
        if(node == nullptr) return;
        res.push_back(node->val);
        preorder(node->left,res);
        preorder(node->right,res);
    }
    vector<int> preorderTraversal(TreeNode* root) {
        vector<int> res;
        preorder(root, res);
        return res;
    }
};