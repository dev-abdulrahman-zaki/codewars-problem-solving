Object.defineProperty( Array.prototype, "containsAll", { value: function containsAll(a) {
    return a.every(e => this.indexOf(e) != -1)
  } } );