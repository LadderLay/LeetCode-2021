/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */


var getKthFromEnd = function(head, k) {
    let cnt = 0;
    let front = head, end = head;
    while(front != null) {
        cnt++;
        front = front.next;
    }
    cnt = cnt - k;
    while(cnt--) {
        end = end.next;
    }
    return end;
}

//快慢指针
var getKthFromEnd = function(head, k) {
    let fast = head, slow = head;
    while(k--) {
        fast = fast. next;
    }
    while(fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};