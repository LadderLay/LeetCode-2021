/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let tmp = new Set();
    let ans = 0, j = 0;
    for(let i=0; i<s.length; ++i) {
        if(i !== 0) {
            tmp.delete(s[i-1]);
        }
        while(j<s.length && !tmp.has(s[j])) {
            tmp.add(s[j]);
            j++;
        }
        ans = Math.max(ans, j-i);
    }
    return ans;
};

//滑动窗口问题