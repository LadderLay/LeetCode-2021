class Solution {
public:
    vector<vector<int>> flipAndInvertImage(vector<vector<int>>& A) {
        int m = A.size();
        int a, b;
        for(int i=0; i<m; i++) {
            for(int j=0; j<m/2; j++) {
                a = A[i][j]^1;
                b = A[i][m-j-1]^1;
                A[i][j] = b;
                A[i][m-j-1] = a;
            }
            if(m%2) {
                A[i][m/2] = 1 - A[i][m/2];
            }
        }
        return A;
    }
};