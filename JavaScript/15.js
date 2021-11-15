//3sum问题
//排序+双指针
//时间复杂度  O(n^2)
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let res = [], n = nums.length;
    if(n < 3)   return res;
    nums.sort((a, b) => a-b);
    for(let i=0; i<n-2; ++i) {
        if(nums[i] > 0) return res;
        if(i > 0 && nums[i] === nums[i-1])    continue;
        let low = i+1, high = n-1;
        while(low < high) {
            if(nums[low]+nums[high]+nums[i] === 0){
                res.push([nums[i],nums[low], nums[high]]);
                while(low < high && nums[low] === nums[low+1])  low++;
                while(low < high && nums[high] === nums[high-1])    high--;
                low++;
                high--;
            } else if(nums[low]+nums[high]+nums[i] > 0) {
                high--;
            } else {
                low++;
            }
        }
    }
    return res;
};