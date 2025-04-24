function equableTriangle(a,b,c) {
    let s = (a+b+c)/2;
    let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
    let perimeter = a+b+c;
    return area==perimeter ;
    }