function dontGiveMeFive(start, end) {
  return Array(end - start + 1)
    .fill(start)
    .map((e, i) => e + i)
    .filter((e) => !String(e).includes("5")).length;
}

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
console.log(dontGiveMeFive(1, 9));

// Another Solution
function dontGiveMeFive(start, end) {
  return Array.from(Array(end - start + 1), (e, i) => i + start).filter(
    (e) => ("" + e).indexOf("5") === -1
  ).length;
}

// Another Solution
function dontGiveMeFive(start, end) {
    let count = 0
    for (let i = start; i <= end; i++) {
      if (!/5/.test(i)) {
        count++
      }
    }
    return count
  }