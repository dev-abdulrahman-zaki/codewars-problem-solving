function cupVolume(d1, d2, h){
    let a1 = Math.PI*(d1/2)**2;
    let a2 = Math.PI*(d2/2)**2;
    return parseFloat((h/3*(a1 + a2 + Math.sqrt(a1*a2))).toFixed(2));
    }