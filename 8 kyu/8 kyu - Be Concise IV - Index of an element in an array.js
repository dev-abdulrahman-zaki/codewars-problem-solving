// const find = (array, element) => {
// let EleI = "Not found";
// array.forEach((e,i) => {if(e===element){EleI = i}})
// return EleI;
// }

function find(a, e) {
    return a.indexOf(e) >= 0 ? a.indexOf(e) : "Not found";
  }