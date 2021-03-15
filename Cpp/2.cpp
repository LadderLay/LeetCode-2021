/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *head = nullptr, *p = nullptr;
        int n1, n2, tmp, tag = 0;
        while(l1 || l2) {
            n1 = l1 ? l1->val : 0;
            n2 = l2 ? l2->val : 0;
            tmp = n1 + n2 + tag;
            tag = tmp / 10;
            if(!head) {
                head = p = new ListNode(tmp % 10);
            } else {
                p->next = new ListNode(tmp % 10);
                p = p->next; 
            }
            if(l1)
                l1 = l1->next;
            if(l2)
                l2 = l2->next;
        }
        if(tag == 1) {
            p->next = new ListNode(1);
        }
        return head;
    }
};

//和415字符串相加相比多了对链表的处理
//要熟悉常见的数据结构 并且能够手写实现