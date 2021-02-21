/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* left;
    Node* right;
    Node* next;

    Node() : val(0), left(NULL), right(NULL), next(NULL) {}

    Node(int _val) : val(_val), left(NULL), right(NULL), next(NULL) {}

    Node(int _val, Node* _left, Node* _right, Node* _next)
        : val(_val), left(_left), right(_right), next(_next) {}
};
*/

class Solution {
public:
    Node* connect(Node* root) {
        if(root == NULL)
            return NULL;
        connect2nodes(root->left, root->right);
        return root;
    }
    void connect2nodes(Node* a,  Node* b) {
        if(a == NULL || b == NULL)
            return;
        a->next = b;
        connect2nodes(a->left, a->right);
        connect2nodes(b->left, b->right);
        connect2nodes(a->right, b->left);
    }
};