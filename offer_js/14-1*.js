var cuttingRope = function(n) {
    let dp = new Array(n+1).fill(0);
    dp[1] = 1;
    dp[2] = 1;
    for(let i=3; i<=n; ++i) {
        let j = 2;
        while(j < i) {
            dp[i] = Math.max(dp[i], j * Math.max(i-j,dp[i-j]));
            j++;
        }
    }
    return dp[n];
};
//还有很多解法