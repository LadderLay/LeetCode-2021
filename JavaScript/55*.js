var canJump = function(nums) {
    let len = nums.length;
    let maxStep = 0;
    for(let i=0; i<len - 1; ++i) {
        maxStep = Math.max(maxStep, i + nums[i]);
        if(maxStep <= i)
            return false;
    }
    return maxStep >= len - 1;
};
//贪心 
// 注意边界判断条件的处理