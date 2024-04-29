function findDup( arr ){
    return arr.filter((e,i) => i != arr.lastIndexOf(e))[0];
}

