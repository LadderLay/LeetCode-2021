/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function(timeSeries, duration) {
    let sum = 0, experies = 0;
    for(let i=0; i<timeSeries.length; ++i) {
        if(timeSeries[i] <= experies){
            sum += duration + timeSeries[i] - experies;
        } else {
            sum += duration;
        }
        experies = timeSeries[i]+duration;
    }
    return sum;

};
// inclusive
// non-decreasing 非递减的 denote表示