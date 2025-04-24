var isAnagram = function(s, t) {
    const w1 = s?.toLowerCase().split("").sort().join("");
    const w2 = t?.toLowerCase().split("").sort().join("");
    console.log(w1, w2);
    return w1 === w2;
};

console.log(isAnagram("Buckethead", "DeathCubeK"));