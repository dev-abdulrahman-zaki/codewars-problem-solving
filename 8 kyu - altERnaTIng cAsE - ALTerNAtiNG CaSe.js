String.prototype.toAlternatingCase = function () {
    return this.split("").map(c => /[A-Z]/g.test(c) ? c.toLowerCase() : c.toUpperCase()).join("");
  }