function solve(s) {
    return Math.max(...s.match(/(\d+)/g));
  };


  console.log(
    solve('gh12cdy695m1')
  );
  