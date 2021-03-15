// 1 暴力
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> res;
        int n = nums.size();
        for(int i=0; i<n-1; ++i) {
            for(int j=i+1; j<n; ++j) {
                if(nums[i] + nums[j] == target) {
                    res.push_back(i);
                    res.push_back(j);
                }
            }
        }
        return res;
    }
};

//2 哈希
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        unordered_map<int,int> tmp;
        for(int i=0; i<nums.size(); ++i) {
            auto it = tmp.find(target - nums[i]);
            if(it != tmp.end()) {
                return {it->second, i};
            }
            tmp[nums[i]] = i;
        }
        return {};
    }
};
//熟悉unordered_map的常见使用