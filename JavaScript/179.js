/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b) => {
        return (''+b+a) - (''+a+b);
    })
    return nums[0]== 0 ? '0' : nums.join(''); 
};