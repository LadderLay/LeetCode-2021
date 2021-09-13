// 把问题分解为两个打家劫舍的子问题
class Solution {
public:
    int robRange(vector<int>& nums, int start, int end) {
        int first = nums[start], second = max(nums[start], nums[start+1]);
        for(int i=start+2; i<=end; ++i) {
            int tmp = max(second, first+nums[i]);
            first = second;
            second = tmp;
        }
        return second;
    }
    int rob(vector<int>& nums) {
        int len = nums.size();
        if(len == 1)   return nums[0];
        else if(len == 2)   return max(nums[0], nums[1]);

        return max(robRange(nums, 0, len-2), robRange(nums, 1, len-1));
    }
};