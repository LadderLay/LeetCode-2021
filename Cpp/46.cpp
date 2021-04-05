//经典的全排列
//回溯法
class Solution {
public:
    vector<vector<int>> res;
    vector<int> path;

    void backtrack(vector<int> &nums, vector<bool> &used) {
        if(path.size() == nums.size()) {
            res.push_back(path);
            return;
        }
        for(int i=0; i<nums.size(); ++i) {
            if(used[i]) continue;
            used[i] = true;
            path.push_back(nums[i]);
            backtrack(nums,used);
            path.pop_back();
            used[i] = false;
        }
    }

    vector<vector<int>> permute(vector<int>& nums) {
        vector<bool> used(nums.size(), false);
        backtrack(nums, used);
        return res;
    }
};

//参考：
//https://leetcode-cn.com/problems/permutations/solution/46-quan-pai-lie-hui-su-suan-fa-jing-dian-ti-mu-xia/