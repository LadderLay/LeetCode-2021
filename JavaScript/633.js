/**
 * @param {number} c
 * @return {boolean}
 */
 var judgeSquareSum = function(c) {
    let l=0, r=~~Math.sqrt(c);
    while(l <= r) {
        let tmp = l*l + r*r;
        if(tmp === c)
            return true;
        else if(tmp > c) 
            r--;
        else
            l++;
    }
    return false;
};