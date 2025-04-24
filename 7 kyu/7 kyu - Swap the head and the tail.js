function swapHeadAndTail(arr) {
  let middleIdx = arr.length / 2;
  //   console.log(middleIdx);
  if (Number.isInteger(middleIdx)) {
    return [...arr.slice(middleIdx), ...arr.slice(0, middleIdx)];
  } else {
    middleIdx = Math.floor(middleIdx);
    return [
      ...arr.slice(middleIdx + 1),
      arr[middleIdx],
      ...arr.slice(0, middleIdx),
    ];
  }
}

swapHeadAndTail([1, 2, 3, 4, 5]); //, [ 4, 5, 3, 1, 2 ]);
swapHeadAndTail([-1, 2]); //, [ 2, -1 ]);
swapHeadAndTail([1, 2, -3, 4, 5, 6, -7, 8]); //, [ 5, 6, -7, 8, 1, 2, -3, 4 ]);

/*
const swapHeadAndTail = (arr, mid = arr.length / 2) => [
  ...arr.slice(-mid),
  ...arr.slice(mid, -mid), 
  ...arr.slice(0, mid)
];
*/

/*
const swapHeadAndTail = arr =>
  (val => [...arr.slice(-val), ...arr.slice(val, -val), ...arr.slice(0, val)])
  (arr.length / 2);
  */

/*
const swapHeadAndTail = (array) => {
    let l = array.length;
    let r = Math.round(l / 2);
    let f = Math.floor(l / 2);
    let a = array.splice(0, f);
    let b = array.splice(r - f);
    return b.concat(array, a);
}
  */
