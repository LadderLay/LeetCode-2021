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