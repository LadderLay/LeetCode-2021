//虽然是简单题 但是题目有点绕
//主要是去熟悉一下unordered_map的基本用法
class Solution {
public:
    int findShortestSubArray(vector<int>& nums) {
        unordered_map<int, int>cnt, left, right;
        int len = nums.size();
        int x = 0;
        for(int i=0; i<nums.size(); i++) {
            if(!left.count(nums[i])) { //调用count方法去判断是否存在key为nums[i]的数据项
            //count(Key)  如果Map中存在具有给定键的值，则此函数返回1，否则返回0
                left[nums[i]] = i;
            }
            right[nums[i]] = i;
            cnt[nums[i]]++;
            x = max(x,cnt[nums[i]]);
        }
        for(auto &n : cnt) {
            if(n.second == x) {
                len = min(len, right[n.first] - left[n.first] + 1);
            }
        }
        return len;
    }
};