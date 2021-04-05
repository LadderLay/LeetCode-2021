/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    var map = new Map();
    for(num of nums) {
        if(map.has(num))
            return num;
        else
            map.set(num,1);
    }
    return null;
};