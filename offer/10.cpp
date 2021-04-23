class Solution {
public:
    // int fib(int n) { //常规的递归方法
    //     if(n <= 1)
    //         return n;
    //     return fib(n-1)+fib(n-2);
    // }
    //时间复杂度 O（2^n）
    int fib(int n) { 
        if(n <= 1)  return n;
        vector<int> res(n+1, 0);
        res[0] = 0;
        res[1] = 1;
        for(int i=2; i<=n; ++i) {
            res[i] = (res[i-1] + res[i-2]) % 1000000007;
        }
        return res[n];
    //
    //时间复杂度O(n) 空间复杂度O(n) 记忆化
    }
};