//位运算真是博大精深啊
// 还有一个运算符优先级的问题

 var isPowerOfTwo = function(n) {
    return n > 0 && (n & (n-1)) === 0;
};

//=>lc342