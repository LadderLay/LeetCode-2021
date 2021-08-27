// 哈希集合
// 时间复杂度O（m+n） 空间复杂度O（m） m n 分别为链表A B的长度
var getIntersectionNode = function(headA, headB) {
    const visited = new Set();
    let pa = headA, pb = headB;
    while(pa !== null) {
        visited.add(pa);
        pa = pa.next;
    }
    while(pb !== null) {
        if(visited.has(pb)) {
            return pb;
        }
        pb = pb.next;
    }
    return null;
};

//双指针法
//很巧妙，空间复杂度降到了O（1）
var getIntersectionNode = function(headA, headB) {
    if(!headA || !headB)  return null;
    let pa = headA, pb = headB;
    while(pa !== pb) {
        if(pa === null) {
            pa = headB;
        } else if(pb === null) {
            pb = headA;
        } else {
            pa = pa.next;
            pb = pb.next;
        }
    }
    return pa;
};
