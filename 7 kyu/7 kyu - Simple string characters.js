function solve(s){
    let uppercase = [...s.matchAll(/[A-Z]/g)].length;
    let lowercase = [...s.matchAll(/[a-z]/g)].length;
    let numbers = [...s.matchAll(/[0-9]/g)].length;
    let specialChar = [...s.matchAll(/[^A-Za-z0-9]/g)].length;
    return [uppercase, lowercase, numbers, specialChar];
}