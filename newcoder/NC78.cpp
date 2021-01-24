//高频题 反转链表
// 关键在于 理解 需要两个辅助指针，一个指向前一个节点，用于链表指向的反转（该节点next指针指向前一个节点）；
// 另一个用于指向后一个节点，避免next指向改变过程中 后续节点的丢失。

/*
struct ListNode {
	int val;
	struct ListNode *next;
	ListNode(int x) :
			val(x), next(NULL) {
	}
};*/
class Solution {
public:
    ListNode* ReverseList(ListNode* pHead) {
        ListNode* pre = NULL;
        ListNode* p = NULL;
        while(pHead != NULL) {
            p = pHead->next;
            pHead->next = pre;
            pre = pHead;
            pHead = p;
        }
        return pre;
    }
};