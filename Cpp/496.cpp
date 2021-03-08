class Solution {
public:
    vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
        map<int,int> next;
        vector<int> res;
        for(int i=0; i<nums2.size(); i++) {
            next[nums2[i]] = findNext(nums2, i);
        }
        for(int i=0; i<nums1.size(); i++) {
            res.push_back(next[nums1[i]]);
        }
        return res;
    }
    int findNext(vector<int>& nums, int i) {
        for(int j=i+1; j<nums.size();j++) {
            if(nums[i]<nums[j])
                return nums[j];
        }
        return -1;
    }
};