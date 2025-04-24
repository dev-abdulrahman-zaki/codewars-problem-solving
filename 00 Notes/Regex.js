// function getMichaelLastName(inputText){
//     let regexp = /(?:Michael) (?<LastName>[A-Z]{1}[a-z]{1,})/gm;
//     let match = regexp.exec(inputText);
//     if (match) return match.groups.LastName;
//     else return;
//     }

//     const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";
//     console.log(
//         getMichaelLastName(inputText)
// ); 


// function getMichaelLastName(inputText){
//     let regexp = /(?:Michael) (?<LastName>[A-Z]{1}[a-z]{1,})/gm;
//     let match = Array.from(inputText.matchAll(regexp));
//     return match.map(e => e.slice(-1)[0])
// }
    
//     const inputText = "Michael, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";
//     console.log(
//         getMichaelLastName(inputText)
// );