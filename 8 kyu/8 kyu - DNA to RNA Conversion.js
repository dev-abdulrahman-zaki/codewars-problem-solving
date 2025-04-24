function DNAtoRNA(dna) {
    return dna.split("").map((e) => e === "T" ? "U" : e).join("");
  }

  /*
function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}
*/
