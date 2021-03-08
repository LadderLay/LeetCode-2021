class Solution {
private:
    vector<vector<string>> result;
    vector<string> path; 

    bool isPalindrome(const string& s, int b, int e) {
        for(int i=b, j=e; i<j; i++,j--) {
            if(s[i] != s[j])
                return false;
        }
        return true;
    }
    void backtracking (const string& s, int startIndex) {
        if(startIndex >= s.size()) {
            result.push_back(path);
            return;
        }
        for(int i=startIndex; i<s.size(); i++) {
            if(isPalindrome(s, startIndex, i)) {
                string str = s.substr(startIndex, i-startIndex+1);
                path.push_back(str);
            } else {
                continue;
            }
            backtracking(s, i+1);
            path.pop_back();
        }
    }
public:
    vector<vector<string>> partition(string s) {
        backtracking(s, 0);
        return result;
    }
};
//回溯法
//找时间重新写一遍