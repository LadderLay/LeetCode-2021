class Solution {
public:
    int findKthLargest(vector<int>& nums, int k) {
        return quickFind(nums, 0, nums.size(), k);
    }
    int quickFind(vector<int>& nums, int l, int r, int k) {
        int keyLoc = l + rand() % (r - l);
        swap(nums[keyLoc], nums[l]);
        int key = nums[l];
        int start = l, end = r-1;
        while(start < end) {
            while(start<end && nums[end]>=key)  end--;
            nums[start] = nums[end];
            while(start<end && nums[start]<=key)   start++;
            nums[end] = nums[start];
        }
        nums[start] = key;
        if(start == r-k) return nums[start];
        else if(start>r-k) return quickFind(nums,l,start,k-(r-start));
        else return quickFind(nums,start+1,r,k);
    }
};

//快速选择+随机化
