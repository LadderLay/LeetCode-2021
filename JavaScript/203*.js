//写的不是很顺的链表题
 var removeElements = function(head, val) {
    while(head && head.val===val) {
        head = head.next;
    }
    if(head===null) return head;  //单独处理头节点
    
    let p = head;
    while(p.next !== null) {
        if(p.next.val === val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    }
    return head;
};