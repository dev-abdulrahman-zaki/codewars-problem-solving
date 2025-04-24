function product (string) {
    let exMark = string.split("").filter(e => e==="!").length;
    let quMark = string.split("").filter(e => e==="?").length;
    return exMark*quMark;
}