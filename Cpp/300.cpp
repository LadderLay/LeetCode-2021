//直观解法
//动态规划
//时间复杂度O（n^2）
class Solution {
public:
    int lengthOfLIS(vector<int>& nums) {
        int len = nums.size();
        vector<int> dp(len,1);
        for(int i=0; i<len; i++) {
            for(int j=0; j<i; j++) {
                if(nums[i] > nums[j]) {
                    dp[i] = max(dp[i],dp[j]+1);
                }
            }
        }
        int res = dp[0];
        for(int i=1; i<len; i++) {
            res = max(res, dp[i]);
        }
        return res;
    }
};