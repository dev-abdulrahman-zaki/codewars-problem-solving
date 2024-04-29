function duplicateSandwich(a) {
    let str;
        if (typeof a == "string"){a = a.split(""); str = a;};
        let unique = a.filter((e,i,arr) => arr.indexOf(e) !== arr.lastIndexOf(e))[0];
        if (str){return a.slice(a.indexOf(unique)+1, a.lastIndexOf(unique)).join("")};
        return a.slice(a.indexOf(unique)+1, a.lastIndexOf(unique))
    }