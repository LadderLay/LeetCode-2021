// dp
// 时间 n^2 空间 n
var lengthOfLIS = function(nums) {
    let dp = [1], max = 1; //nums[i]结尾的最长递增子序列
    for(let i=1; i<nums.length; ++i) {
        dp[i] = 1;
        for(let j=0; j<i; ++j) {
            if(nums[j] < nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i]);
            }
        }
        max = Math.max(dp[i], max);
    }
    return max;
};