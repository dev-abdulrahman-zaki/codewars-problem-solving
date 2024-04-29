function weRateDogs(str, rating){
    return str.replace(/(\d\/)/g, `${rating}/`);
    }