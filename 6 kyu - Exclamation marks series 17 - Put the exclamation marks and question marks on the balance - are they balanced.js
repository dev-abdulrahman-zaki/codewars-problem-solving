function balance(left,right){
    let exMarkLeft = left.split("").filter(e => e==="!").length;
    let quMarkLeft = left.split("").filter(e => e==="?").length;
    let exMarkRight = right.split("").filter(e => e==="!").length;
    let quMarkRight = right.split("").filter(e => e==="?").length;
    return (exMarkLeft*2+quMarkLeft*3 == exMarkRight*2+quMarkRight*3) ? "Balance" : (exMarkLeft*2+quMarkLeft*3 > exMarkRight*2+quMarkRight*3) ? "Left" : "Right";
    }