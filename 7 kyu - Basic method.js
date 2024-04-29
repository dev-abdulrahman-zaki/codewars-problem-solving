Array.prototype.max = function() {
    if (this.some(e => isNaN(e))){return NaN;}
    let arr = this.map(e => Number(e));
    return Math.max(...arr);
};

/*
Array.prototype.max = function() {
  return Math.max(...this);
}
*/

/*
Array.prototype.max = function() {return Math.max.apply(null, this); }
*/

/*
Array.prototype.max = function() {
  return this.some(isNaN) ? NaN : Math.max(...this);
};
*/