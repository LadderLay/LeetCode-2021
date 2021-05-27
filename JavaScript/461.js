/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    let res = x ^ y;
    let cnt = 0;
    while(res) {
        if(res & 1 === 1) cnt++;
        // 官方题解写的更简洁,如下   
        //cnt += res & 1;
        res = res >> 1;
    }
    return cnt;
};