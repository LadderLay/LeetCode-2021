//合并两个有序数组
class Solution {
public:
    void merge(int A[], int m, int B[], int n) {
        int p = m -1;
        int q = n -1;
        for(int ptr = m+n-1; p>=0 && q>=0; ptr--) {
            if(A[p] < B[q]) {
                A[ptr] = B[q--];
            } else {
                A[ptr] = A[p--];
            }
        }
        while(q>=0) {
            A[q] = B[q];
            q--;
            //牛客好奇怪这里我写A[q] = B[q--];会显示数组越界？hmmm
        }
    }
};