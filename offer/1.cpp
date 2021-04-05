class Solution {
public:
    int findRepeatNumber(vector<int>& nums) {
        map<int,int> cnt;
        for(int i=0; i<nums.size(); ++i) {
            if(cnt.find(nums[i]) == cnt.end()) {
                cnt[nums[i]] = 1;
            }
            else 
                return nums[i];
        }
        return 0;
    }
};