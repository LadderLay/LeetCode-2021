var rand10 = function() {
    while(true) {
        let a = rand7();
        let b = rand7();
        let n = (a-1)*7+b;
        if(n <= 40) return (n-1) % 10 + 1;
    }
};