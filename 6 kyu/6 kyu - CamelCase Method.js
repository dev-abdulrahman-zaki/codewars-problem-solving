String.prototype.camelCase=function(){
    return (this == "") ? "" : this.split(" ").map(w=>w[0].toUpperCase()+w.slice(1,)).join("");
}

/*
String.prototype.camelCase = function () {
  return this.trim().replace(/(?:^|\s+)(\w)/g, (_, c) => c.toUpperCase())
}
*/

/*
String.prototype.camelCase = function () {
  return this.trim().replace(/(?:^|\s)(\w)/g, (_, $1) => $1.toUpperCase());
};
*/

/*
 String.prototype.camelCase = function() {
  return this.trim().replace(/(\b|\s)\w/g, match => match.trim().toUpperCase());
}
*/

/*
String.prototype.camelCase=function(){
  const transformString = this.replace(/^(.)|[\s](.)/g, c => (c.length === 1 ? c.toUpperCase() : c[1].toUpperCase()));
  
  return transformString; 
}
*/