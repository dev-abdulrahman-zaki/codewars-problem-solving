function gridIndex(grid, indices) {
    let arr = grid.flat(2);
    return indices.map(e => arr[e-1]).join("");
}


console.log(
    gridIndex([['h', 'e', 'l', 'l'], ['o', 'c', 'o', 'd'], ['e', 'w', 'a', 'r'], ['r', 'i', 'o', 'r']], [5, 7, 9, 3, 6, 6, 8, 8, 16, 13])
);