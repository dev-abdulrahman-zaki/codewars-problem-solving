function isMatching(string, str1, str2) {
    const normalize = str => str.toLowerCase().replace(/ /g, '');
    const sortedString = normalize(string).split('').sort().join('');
    const sortedCombined = normalize(str1 + str2).split('').sort().join('');
  
    return sortedString === sortedCombined;
}




    console.log(
        isMatching("email box", "bail", "moxe")
    );


    /*
    function isMatching(string, str1, str2) {
    let x = string.toLowerCase().split("").sort().filter(e => e != " ");
    let y = [...str1.toLowerCase().split(""), ...str2.toLowerCase().split("")].sort();
    console.log(x);
    console.log(y);
}
*/