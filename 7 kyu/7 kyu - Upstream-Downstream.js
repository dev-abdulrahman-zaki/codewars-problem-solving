function time(distance,boatSpeed,stream){
    let streamSpeed = Number(stream.split(" ")[1]);
    let result = distance / ( stream.includes("Downstream") ? streamSpeed+boatSpeed : boatSpeed-streamSpeed)
    return Number(result.toFixed(2))
}

/*
const [dir, delta] = stream.split(' ');
*/

