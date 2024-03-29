class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        vector<int> dp(amount+1, amount+1);
        dp[0] = 0;
        for(int i=0; i<coins.size(); ++i) {
            for(int j=0; j<=amount; ++j) {
                if(j >= coins[i]) {
                    dp[j] = min(dp[j-coins[i]]+1, dp[j]);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
};