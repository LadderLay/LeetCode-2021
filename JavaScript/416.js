// 1
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    let res = 0, n = nums.length;
    for(const num of nums) {
        res += num;
    }
    if(res % 2) return false;
    res /= 2;
    const dp = new Array(n).fill(false).map(i => new Array(res+1).fill(false));
    if(nums[0] <= res)    dp[0][nums[0]] = true;

    for(let i=1; i<n; ++i) {
        for(let j=0; j<=res; ++j) {
            dp[i][j] = dp[i-1][j];
            if(nums[i] < j) {
                dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i]];
            } else if(nums[i] === j) {
                dp[i][j] = true;
            }
        }
    }
    return dp[n-1][res];
};

// 2
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canPartition = function(nums) {
    let res = 0, n = nums.length;
    for(const num of nums) {
        res += num;
    }
    if(res % 2) return false;
    res /= 2;
    const dp = new Array(res+1).fill(false);
    if(nums[0] <= res)    dp[nums[0]] = true;

    for(let i=1; i<n; ++i) {
        for(let j=res; j>=0; --j) {
            if(nums[i] < j) {
                dp[j] = dp[j] || dp[j-nums[i]];
            } else if(nums[i] === j) {
                dp[j] = true;
            }
        }
    }
    return dp[res];
};