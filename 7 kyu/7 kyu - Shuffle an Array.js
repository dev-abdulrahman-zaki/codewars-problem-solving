function shuffle(arr) {
    arr.forEach((e,i,arr) => {
      let randIdx = Math.floor(Math.random()*arr.length);
      [arr[i], arr[randIdx]] = [arr[randIdx], arr[i]];
    })
    return arr;
    }    