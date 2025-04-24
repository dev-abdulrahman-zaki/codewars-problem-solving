function commonGround(s1, s2){
    return s1.split(" ").filter(e => s2.split(" ").includes(e)).join(" ") || "death";
}