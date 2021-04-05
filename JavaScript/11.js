/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0, r = height.length - 1;
    let ans = 0;
    while(l < r) {
        let tmp = Math.min(height[l],height[r]) * (r-l);
        ans = Math.max(tmp, ans);
        if(height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    return ans;
};
//对撞指针