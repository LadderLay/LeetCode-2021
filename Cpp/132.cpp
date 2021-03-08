class Solution {
public:
    int minCut(string s) {
        int n = s.size();
        vector<vector<bool>> palindrome(n,vector<bool>(n,false));
        vector<int> dp(n,0);
        for(int i=0; i<n; i++) {
            dp[i] = i;
        }
        for(int i=n-1; i>=0; i--) {
            for(int j=i; j<n; j++) {
                if(s[i]==s[j] && (j-i<=1 || palindrome[i+1][j-1])) {
                    palindrome[i][j] = true;
                }
            }
        }
        for(int i=1; i<n; i++) {
            if(palindrome[0][i]) {
                dp[i] = 0;
                continue;
            }
            for(int j=0; j<i; j++) {
                if(palindrome[j+1][i]) {
                    dp[i] = min(dp[i],dp[j]+1);
                }
            }
        }
        return dp[n-1];
    }
};

//dp
//囫囵吞枣，抽时间整理一下回文的leetcode专题