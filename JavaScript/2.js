/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let prehead = p = new ListNode(-1);
    let tag = 0;
    while(l1 || l2 || tag) {
        let n1 = (l1 ? 0 : l1.val);
        let n2 = (l2 ? 0 : l2.val);
        let tmp = n1 + n2 + tag;
        tag = Math.floor(tmp / 10);
        p.next = new ListNode(tmp % 10);
        p = p.next;
        if(l1)  l1 = l1.next;
        if(l2)  l2 = l2.next;
    }

    return prehead.next;
};