function longest(s1, s2) {
  return [...new Set([...s1.split(""), ...s2.split("")])].sort().join("");
}

// let x = longest("aretheyhere", "yestheyarehere"); //, "aehrsty")
// let x = longest("loopingisfunbutdangerous", "lessdangerousthancoding")                          //, "abcdefghilnoprstu")
let x = longest("inmanylanguages", "theresapairoffunctions")                          //, "acefghilmnoprstuy")
console.log(x);

// 
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')