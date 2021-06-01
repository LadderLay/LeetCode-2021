var isPowerOfFour = function(n) {
    return n > 0 && (n&(n-1)) === 0 && (0xaaaaaaaa & n) === 0;

};
//啊还是没有绕过弯来