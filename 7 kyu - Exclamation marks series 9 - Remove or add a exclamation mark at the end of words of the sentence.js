function removeOrAdd(string) {
    return string.split(" ").map(e => {
       if (!e.endsWith("!")){return e+"!";}
       if (/[^!]+(!{1})$/g.test(e)){return e.slice(0,-1)}
       return e;
    }).join(" ");
   }


    console.log(
        remove("Hi Hi! Hi!! !Hi!")
    );