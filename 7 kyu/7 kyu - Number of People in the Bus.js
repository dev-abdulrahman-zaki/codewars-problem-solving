var number = function(busStops){
    let countIn = busStops.map(arr => arr[0]).reduce((a,b) => a+b);
    let countOut = busStops.map(arr => arr[1]).reduce((a,b) => a+b);
    return countIn - countOut;
}

/*
const number = (busStops) => busStops.reduce((acc, [on, out]) => acc + on - out, 0);
*/