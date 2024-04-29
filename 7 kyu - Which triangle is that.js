var typeOfTriangle = function(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) {
        return "Not a valid triangle";
    }

    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Equilateral";
        } else if (a === b || b === c || a === c) {
            return "Isosceles";
        } else {
            return "Scalene";
        }
    }

    return "Not a valid triangle";
}



// Equilateral Triangle: All sides are of equal length.
// Isosceles Triangle: Two sides are of equal length, and the third side is of a different length.
// Scalene Triangle: All three sides are of different lengths.
// Invalid Triangle: The input values cannot form a valid triangle. This occurs when the sum of the lengths of any two sides is not greater than the length of the third side.