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

//使用哈希表解决滑动窗口问题
/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let max = 0, len = 0;
    for(let i=0; i<s.length; ++i) {
        if(!map.has(s[i])) {
            len++;
            map.set(s[i], i);
        } else {
            let j = map.get(s[i]);
            if(i - j <= len) {
                len = i - j;
            } else {
                len++;
            }
            map.set(s[i], i);
        }
        max = Math.max(max, len);
    }
    return max;
};

// 需要注意的是 空间复杂度是字符集的大小