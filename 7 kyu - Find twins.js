function elimination(arr){
    let twins = arr.filter(e=>arr.indexOf(e)!=arr.lastIndexOf(e))[0];
    return twins ? twins : null;
}

/*
const elimination = ar => ar.filter((e,i) => i !== ar.lastIndexOf(e))[0] || null;
*/