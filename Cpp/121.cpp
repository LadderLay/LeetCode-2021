class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n = prices.size();
        vector<int> dp(n);
        dp[0] = 0;
        int profit = 0, cur = 0;
        for(int i=1; i<n; i++) {
            dp[i]=prices[i]-prices[i-1];
            cur = max(cur+dp[i], dp[i]);
            profit = max(profit, cur);
        }
        return profit;
    }
};