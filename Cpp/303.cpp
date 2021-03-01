//前缀和 问题 
//如果是直接去求i-j的和，每次调用sumRange时间复杂度均为 O(n)
//前缀和的思路对数组进行预处理 将单次查询的时间复杂度降为O(1) 
class NumArray {
public:
    vector<int> sum;
    NumArray(vector<int>& nums) {
        int n = nums.size();
        sum.resize(n+1);
        for(int i=0; i<n; i++) {
            sum[i+1] = sum[i] + nums[i]; //前i个和存储在sum[i+1]中
        }
    }
    
    int sumRange(int i, int j) {
        return sum[j+1] -sum[i]; 
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(i,j);
 */