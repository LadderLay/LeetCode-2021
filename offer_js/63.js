/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;
    let dp = [0];
    for(let i=0; i<prices.length; ++i) {
        maxProfit = Math.max(maxProfit,prices[i]-minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;
};

//值得回过头再看一遍