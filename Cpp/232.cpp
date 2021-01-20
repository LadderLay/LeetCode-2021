class MyQueue {
public:
    stack<int> A;
    stack<int> B;
    /** Initialize your data structure here. */
    MyQueue() {
    }
    
    /** Push element x to the back of queue. */
    void push(int x) {
        A.push(x);
    }
    
    /** Removes the element from in front of queue and returns that element. */
    int pop() {
        check();
        int v = B.top();
        B.pop();
        return v;
    }
    
    /** Get the front element. */
    int peek() {
        check();
        return B.top();
    }
    
    /** Returns whether the queue is empty. */
    bool empty() {
        return A.empty() && B.empty();
    }
    void check() {
        if(B.empty()) {
            while(!A.empty()) {
                B.push(A.top());
                A.pop();
            }
        }
    }
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */