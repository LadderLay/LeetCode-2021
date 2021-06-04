// 产生了这也能前缀和的感叹！...
 var findMaxLength = function(nums) {
    let tag = 0, max = 0;
    let map = new Map();
    for(let i=0; i<nums.length; ++i) {
        if(nums[i] === 1) {
            tag++;
        } else {
            tag--;
        }
        if(tag === 0) {
            max = Math.max(max, i+1);
        } else if(map.has(tag)) {
            max = Math.max(max, i-map.get(tag));
        } else {
            map.set(tag, i);
        }

    }
    return max;

};