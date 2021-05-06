/**
 * @param {number[]} nums
 * @return {number}
 */
 var deleteAndEarn = function(nums) { 
    let maxVal = 0;
    for (const val of nums) {
        maxVal = Math.max(maxVal, val);
    }
    let bucket = new Array(maxVal+1).fill(0);
    for(let num of nums) {
        bucket[num]++;
    }
    let dp = [];
    dp[0] = 0;
    dp[1] = 1 * bucket[1];
    let max = dp[1];
    for(let i=2; i<=maxVal; ++i) {
        dp[i] = Math.max(dp[i-1], dp[i-2]+i*bucket[i]);
        max = Math.max(dp[i], max);
    }
    return max;
};