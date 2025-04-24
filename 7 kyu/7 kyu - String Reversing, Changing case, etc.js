function reverseAndMirror(s1,s2) {
let str1 = s2.split("").reverse().map(c => /[A-Z]/g.test(c) ? c.toLowerCase() : c.toUpperCase()).join("");
let str2 = s1.split("").reverse().map(c => /[A-Z]/g.test(c) ? c.toLowerCase() : c.toUpperCase()).join("");
let str3 = str2.split("").reverse().join("");
return str1+"@@@"+str2+str3;
}  
  
      s1 = "FizZ";
      s2 = "buZZ";
      console.log(
        reverseAndMirror(s1,s2)
      );       //, "zzUB@@@zZIffIZz"