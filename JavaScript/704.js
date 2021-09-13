var search = function(nums, target) {
    let l = 0, r = nums.length - 1;
    while(l <= r) {
        let m = Math.floor(l + (r - l) / 2);
        if(target === nums[m])
            return m;
        else if(target > nums[m])
            l = m + 1;
        else 
            r = m - 1;
    }
    return -1;
};
// 二分法