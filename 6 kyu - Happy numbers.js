function isHappy(n) {
    if (n<0){return false;}
    if (n==1){return true;}
    for (let i = 0; i < 20000; i++) {
        if (n.toString().length < 2) {
            n = n ** 2;
        } else {
            n = n.toString().split("").reduce((a, b) => a + Number(b) ** 2, 0);
        }
        if (n==1){return true;}
    }
    return false;
    }