class Solution {
public:
    vector<string> res;
    set<string> check;
    string path;
    void backtrack(string str, vector<bool> used) {
        if(path.size() == str.size()) {
            if(check.find(path) == check.end()) {
                check.insert(path);
                res.push_back(path);
            }
            return;
        }
        for(int i=0; i<str.size(); ++i) {
            if(used[i]) continue;
            used[i] = true;
            path.push_back(str[i]);
            backtrack(str, used);
            used[i] = false;
            path.pop_back();
        }
    }
    vector<string> permutation(string s) {
        vector<bool> used(s.size(), false);
        backtrack(s, used);
        return res;
    }
};

//直接套了leetcode38的解法，还没有优化