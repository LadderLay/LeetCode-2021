/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    for(let i =0; i<nums.length; ++i) {
        while(nums[i] != i) {
            let t = nums[i];
            if(t ==nums[t]) {
                return t;
            }
            nums[i] = nums[t];
            nums[t] = t;
        }
    }
    return -1;
};

//原地置换，降低空间复杂度