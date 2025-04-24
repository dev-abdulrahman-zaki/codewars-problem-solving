function solution(pairs){
    return Object.entries(pairs).map(arr => `${arr[0]} = ${arr[1]}`).join()
    }