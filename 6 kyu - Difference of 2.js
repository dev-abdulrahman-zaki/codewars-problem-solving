function twosDifference(input){
    let result = [];
    input.forEach(n => {
        if (input.includes(n+2)) {
            result.push([n,n+2])
        }
    })
      return result;
    }
