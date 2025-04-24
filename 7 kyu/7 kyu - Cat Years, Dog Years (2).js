var ownedCatAndDog = function(catYears, dogYears) {
    let [ownedCat, ownedDog] = [0, 0];

    // Calculate ownedCat based on catYears
    if (catYears >= 15 && catYears < 24) {ownedCat = 1;}
    else if (catYears == 24) {ownedCat = 2;}
    else if (catYears > 24) {ownedCat = Math.floor(2 + ((catYears - 24) / 4));}

    // Calculate ownedDog based on dogYears
    if (dogYears >= 15 && dogYears < 24) {ownedDog = 1;}
    else if (dogYears == 24) {ownedDog = 2;}
    else if (dogYears > 24) {ownedDog = Math.floor(2 + ((dogYears - 24) / 5));}

    return [ownedCat, ownedDog];
}

console.log(
    ownedCatAndDog(7,99)
);