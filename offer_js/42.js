/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    let dp = [],max;
    max = dp[0] = nums[0];
    for(let i=1; i<nums.length; ++i) {
        dp[i] = Math.max(dp[i-1] + nums[i],nums[i]);
        max = Math.max(max,dp[i]);
    }
    return max;
};
//动态规划 时间复杂度O(n) 空间复杂度O(n) 也可以只设置两个变量空间复杂度降到O(1)