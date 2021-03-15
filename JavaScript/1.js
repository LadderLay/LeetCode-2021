/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let tmp = new Map();
    for(let i=0; i<nums.length; i++) {
        if(tmp.has(target-nums[i])) {
            return [tmp.get(target-nums[i]), i];
        }
        tmp.set(nums[i], i);

    }
    return [];

};

//map的使用