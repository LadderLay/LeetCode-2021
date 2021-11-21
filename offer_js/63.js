/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let minPrice = Number.MAX_VALUE;
    let maxProfit = 0;
    for(let i=0; i<prices.length; ++i) {
        maxProfit = Math.max(maxProfit,prices[i]-minPrice);
        minPrice = Math.min(minPrice, prices[i]);
    }
    return maxProfit;
};


// dp常规思路
let dp = [0]; // dp[i] 第i天可获得的最大收益
let minPrice = prices[0];

if(len < 2) return 0;
for(let i=1; i<prices.length; i++) {
    dp[i] = Math.max(dp[i-1], prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
}
return dp[prices.length - 1];