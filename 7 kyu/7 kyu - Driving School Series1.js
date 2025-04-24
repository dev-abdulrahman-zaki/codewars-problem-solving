function passed (list) { 
    let passedList = list.filter(e => e <= 18);
    if (!passedList.length){return "No pass scores registered.";}
    return Math.round(passedList.reduce((a,b) => a+b)/passedList.length);
    } 