var permute = function(nums) {

    const backtrack = function(nums, used) {
        if(path.length === nums.length) {
            res.push(path.slice());
            // slice 方法返回一个新的数组对象
            // 这一对象是一个原数组的浅拷贝, 范围[begin, end)
            // 若begin省略默认从0开始, 若end省略默认拷贝到数组末尾
            return;
        }
        for(let i=0; i<nums.length; ++i) {
            if(used[i]) continue;
            path.push(nums[i]);
            used[i] = true;
            backtrack(nums, used);
            path.pop();
            used[i] = false;
        }
    }
    let res = [], path = [];
    backtrack(nums, []);
    return res;
};