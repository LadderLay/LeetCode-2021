/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let pre = 0, res = nums[0];
    nums.forEach(x=> {
        pre = Math.max(x, pre+x);
        res = Math.max(pre, res);
    })
    return res;
};