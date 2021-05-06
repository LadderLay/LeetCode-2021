/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    if(nums.length === 1)
        return nums[0];
    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(dp[0],nums[1]);
    let  max = dp[1];
    for(let i=2; i<nums.length; ++i) {
        dp[i] = Math.max(dp[i-2]+nums[i],dp[i-1]);
        max = Math.max(dp[i], max);
    }
    return max;
};
// 经典的打家劫舍问题