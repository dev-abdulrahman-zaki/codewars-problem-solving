function vowelIndices(word){
    return word.split("").map((e,i) => /[aeiouy]/gi.test(e) ? i+1 : "").filter(e=>e);
}

