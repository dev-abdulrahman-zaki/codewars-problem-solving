function generateLink(user) {
    return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}



let x = generateLink('matt c') //,'http://www.codewars.com/users/matt%20c')
console.log(x);