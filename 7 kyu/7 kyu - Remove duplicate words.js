function removeDuplicateWords (s) {
    return s.split(" ").filter((e,i,arr) => i === arr.indexOf(e)).join(" ");
    }