/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode *pre = NULL;
        ListNode *p = head, *q;
        while(p != NULL) {
            q = p->next;
            p->next = pre;
            pre = p;
            p = q;
        }
        return pre;
    }
};