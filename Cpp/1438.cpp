// 滑动窗口问题
class Solution {
public:
    int longestSubarray(vector<int>& nums, int limit) {
        map<int,int> res;
        int ans = 0, i=0;

        for(int j=0; j<nums.size(); j++) {
            res[nums[j]]++;
            while(res.rbegin()->first - res.begin()->first > limit) {
                res[nums[i]]--;
                if(res[nums[i]] == 0)    //注意因为使用的是map 所以要相对应的注意一下处理
                    res.erase(nums[i]);
                i++;
            }
            ans = max(ans, j-i+1);
        }

        return ans;
    }
};