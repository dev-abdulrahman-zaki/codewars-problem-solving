function remove(s){
    let pattern = /^(!{0,})[^!]+(!{0,})$/g;
    let match;
    let n;
    return s.split(" ").map(e => {
        match = Array.from(e.matchAll(pattern))[0].slice(1,3);
        n = Math.min(match[0].length, match[1].length)
        return `${"!".repeat(n)}${e.replaceAll("!","")}${"!".repeat(n)}`
        
     }).join(" ");    
}



let s = "!!!!Hi!! !!!!Hi !Hi!!!";
console.log(
    remove(s)
);