function move_zeros(arrNum, isRight=true){
    const filtedList = arrNum.filter(function (num){return num !== 0;});
    const zeroList = arrNum.filter(function (num){return num === 0;});
    return isRight === true ? filtedList.concat(zeroList) : zeroList.concat(filtedList);
  }