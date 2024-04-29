function SumSquares(l){
    return l.toString().split(",").reduce((a,b) => Number(a)+Number(b**2),0)
}