var isPalindrome = function(x) {
    return x.toString().split("").reverse().join("") == x;
};
//很简洁 效率不高
var isPalindrome = function(x) {
    if(x < 0)
        return false;
    let tmp = 0, t = x;
    while (t) {
        tmp = tmp * 10 + t % 10;
        t = parseInt(t / 10)
    }
    if(tmp === x)
        return true;
    return false;
};