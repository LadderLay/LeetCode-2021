/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
//判断链表中是否有环
//快慢指针问题
class Solution {
public:
    bool hasCycle(ListNode *head) {
        if(head == NULL)    
            return false;
        ListNode *slow = head;
        ListNode *fast = head;
        while(fast != NULL && fast->next != NULL) { //边界条件 注意越界的问题
            fast = fast->next->next;
            slow = slow->next;
            if(fast == slow)
                return true;
        }
        return false;
        
    }
};