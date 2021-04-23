/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {

    let tmp = 0;
    let map = new Map();
    let max = 0;

    for(let j=0; j<s.length; ++j) {
        let i = map.get(s[j])
        if(!map.has(s[j]) || j-i > tmp) {
            tmp = tmp + 1;
        } else { // j-i <= tmp
            tmp = j-i;
        }
        map.set(s[j],j)
        max = Math.max(tmp,max)
    }

    return max;
};

// 划重点 可以多做几次