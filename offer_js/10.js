/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let arr = [0,1];
    if(n <=1)   return arr[n];
    for(let i=2; i<=n; ++i) {
        arr[i] = (arr[i-1] + arr[i-2]) % 1000000007;
    }
    return arr[n];
};

//斐波那契数列