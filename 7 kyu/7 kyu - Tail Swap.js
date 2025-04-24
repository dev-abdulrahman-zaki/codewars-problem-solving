function tailSwap(arr) {
    let splitedArr = arr.map(e=>e.split(":"));
    [splitedArr[0][1],splitedArr[1][1]] = [splitedArr[1][1],splitedArr[0][1]];
    let result = splitedArr.map(e => e.join(":"));
    return result;
  }





  tailSwap(['abc:123', 'cde:456'])//, ['abc:456', 'cde:123']);
  tailSwap(['a:12345', '777:xyz'])//, ['a:xyz', '777:12345']);

  /*
  function tailSwap(arr) {
  const [aa, ab] = arr[0].split(":")
  const [ba, bb] = arr[1].split(":")
  return [`${aa}:${bb}`, `${ba}:${ab}`]
}
*/