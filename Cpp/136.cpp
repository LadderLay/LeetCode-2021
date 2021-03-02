class Solution {
public:
    int singleNumber(vector<int>& nums) {
        int ans = 0;;
        for(auto n: nums)
            ans = ans^n;
        return ans;
    }
};
//第一反应是利用额外空间去记录出现次数-.-

//异或 位运算问题
//异或的特点：
//a^0 = a
//a^a = 0
//异或满足交换律结合律