var Calculator = {
    average: function(...args) {
      if (args.length === 0) {
        return 0;
      }
      const sum = args.reduce((acc, val) => acc + val, 0);
      return sum / args.length;
    }
  };
  