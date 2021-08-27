/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 迭代
var reverseList = function(head) {
    let pre = null, p = head,q;
    while(p != null) {
        q = p.next;
        p.next = pre;
        pre = p;
        p = q;
    }
    return pre;

};
// 递归 可以再看一下 时间空间复杂度都为O(n)
var reverseList = function(head) {
    if(!head || !head.next) return head;
    let p = reverseList(head.next);
    head.next.next = head;
    head.next =null;
    return p; //保持对头节点的引用
};