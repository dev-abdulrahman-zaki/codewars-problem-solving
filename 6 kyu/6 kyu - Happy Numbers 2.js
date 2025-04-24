function happyNumbers(x){
    let happyNums = [];
    function isHappy(n) {
    let arr = []
    while (n !== 1 && arr.indexOf(n) === -1) {
      arr.push(n);
      n = n.toString().split('').map(x => Math.pow(Number(x), 2)).reduce((p, n) => p + n, 0);
    }
    return n === 1;
  }
    for (let i = 1; i <= x; i++) {
      if (isHappy(i)){happyNums.push(i)};
    }
    return happyNums;
  }