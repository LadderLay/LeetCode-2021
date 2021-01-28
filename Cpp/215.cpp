class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int left = 0, right = 0;
        int n = nums.size();
        for(int i=0; i<n; i++) {
            right += nums[i];
        }
        for(int i=0; i<n; i++) {
            left += i==0 ? 0 : nums[i-1];
            right -= nums[i];
            if(left == right)
                return i;
        }
        return -1;
    }
};