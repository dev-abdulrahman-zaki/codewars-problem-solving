function heggeleggleggo(word){
    return word.split(" ").map(w => w.replace(/([^aeiou])/gi, '$1egg')).join(" ");
}

/*
let heggeleggleggo = w => w.replace(/([^aeiou ])/gi, "$1egg");
*/

//or
/*
const heggeleggleggo = word => word.replace(/([^aeiou\s])/gi, "$1egg");
*/