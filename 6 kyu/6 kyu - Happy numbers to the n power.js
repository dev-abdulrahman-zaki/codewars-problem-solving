function isHappy(n, pow) {
    let arr = [];
    while (arr.indexOf(n) === -1) {
      arr.push(n);
      n = n.toString().split('').map(x => Number(x)**pow).reduce((p, n) => p + n, 0);
    }
    if (n == 1){return [1]}
    return arr.includes(n) ? [...arr.slice(arr.indexOf(n)),n] : [1];
  }