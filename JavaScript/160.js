//1.常规解法 哈希集合
//时间O（m+n） 空间O（m）
var getIntersectionNode = function(headA, headB) {
    let set = new Set();
    let tmp = headA;
    while(tmp) {
        set.add(tmp);
        tmp = tmp.next;
    }
    tmp = headB;
    while(tmp) {
        if(set.has(tmp)) {
            return tmp;
        }
        tmp = tmp.next;
    }
    return null;
};

//双指针法 很妙
//时间O（m+n） 空间O（1）

var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null)    return null;
    let pa = headA, pb = headB;
    while(pa || pb) {
        if(pa === pb) {
            return pa;
        } else if(pa === null) {
            pa = headB;
            pb = pb.next;
        } else if(pb === null) {
            pb = headA;
            pa = pa.next;
        } else {
            pa = pa.next;
            pb = pb.next;
        }
    }
    return null;
};

//瞄了一眼官方题解果然自己写的很傻...
//最后的跳出条件中，不管两链表有没有相交，pa和pb都是相等的
var getIntersectionNode = function(headA, headB) {
    if(headA === null || headB === null)    return null;
    let pa = headA, pb = headB;
    while(pa !== pb) {
        pa = pa === null ? headB : pa.next;
        pb = pb === null ? headA : pb.next;
    }
    return pa;
};