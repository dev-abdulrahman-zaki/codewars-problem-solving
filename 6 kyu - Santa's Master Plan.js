function getAttendees(peopleInvited, responses){
    let declined = responses.filter(obj => obj.response === "declined").map(obj => obj.name);
    return peopleInvited.filter(e => !declined.includes(e));    
}






let x = getAttendees( ['Easter Bunny', 'Tooth Fairy', 'Frosty the Snowman', 'Jack Frost'] ,
   [ 
     {name: 'Easter Bunny', response: 'declined'}, 
     {name: 'Jack Frost', response: 'declined'}, 
     {name: 'Tooth Fairy', response: 'accepted'} 
   ] 
);
console.log(x);
// => returns ['Tooth Fairy', 'Frosty the Snowman']