String.prototype.trim = function(c = " "){
    let regexp = new RegExp(`([^${c}].{1,}[^${c}])`, "gi");
    return this.match(regexp)[0];
    }



// let x = "LLLHello Worldlll"//.trim("l"), "Hello World");
// let x = "   Hello World                 "//.trim(), "Hello World");
let x = "XVisca ElbarcaXX"//.trim("X"), "Visca Elbarca");
let char = "x";
let regexp = new RegExp(`([^${char}].{1,}[^${char}])`, "gi");
let result = x.match(regexp);

console.log(result);

/*
String.prototype.trim = function (c = ' ') {
  return this.replace(RegExp(`^${c}+|${c}+$`, 'gi'), '');
};
*/

