var reversePrint = function(head) {
    let res = [];
    const visit = (node) => {
        if(node !== null) {
            visit(node.next);
            res.push(node.val);
        }
    }
    visit(head);
    return res;
};

//递归的时间复杂度我有点不太确定 