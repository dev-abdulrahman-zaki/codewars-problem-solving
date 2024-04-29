function toFreud(s) {
  return s === ""
    ? ""
    : s.split(" ") == 1
    ? "sex"
    : s
        .split(" ")
        .map((e) => (e = "sex"))
        .join(" ");
}

/*
    var toFreud=s=>s.replace(/[^ ]+/g,'sex')
*/
/*
function toFreud(string) {
  return string.replace(/\S+/g, 'sex');
}
*/