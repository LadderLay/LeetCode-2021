class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int n = prices.size();
        if(n <= 1)
            return 0;
        int profit, res = 0;
        for(int i=1; i<n; ++i) {
            profit = prices[i] - prices[i-1];
            if(profit > 0) {
                res += profit;
            }
        }
        return res;
    }
};