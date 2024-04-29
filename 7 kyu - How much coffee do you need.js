function howMuchCoffee(events) {
    let count = 0;
    events.forEach(e => {
        if (/(cw|dog|cat|movie)$/.test(e)){count+=1;}
        else if (/(CW|DOG|CAT|MOVIE)$/.test(e)){count+=2;}
    })
    return count > 3 ? "You need extra sleep" : count;
}