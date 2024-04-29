var searchArray = function (arrayToSearch, query) {
    // Validate input arrays
    if (!Array.isArray(arrayToSearch) || !arrayToSearch.every(subArr => Array.isArray(subArr) && subArr.length === 2)) {
        throw new Error('Invalid input: The arrayToSearch should be a two-dimensional array with sub-arrays of length two.');
    }
    if (!Array.isArray(query) || query.length !== 2) {
        throw new Error('Invalid input: The query should be an array of length two.');
    }

    for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i].every((e, idx) => e === query[idx])) {
            return i;
        }
    }
    return -1;
}

var arrayToSearch = [[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]];
var query = [7,2];

console.log(
    searchArray(arrayToSearch,query)
);










/*
Try(1):
var searchArray = function (arrayToSearch, query) {
    // Compare arrays
    function areEqual(obj1, obj2) {
        if (Array.isArray(obj1) && Array.isArray(obj2)) {
        const sortedObj1 = [...obj1].sort();
        const sortedObj2 = [...obj2].sort();
        return sortedObj1.every((e, i) => areEqual(e, sortedObj2[i]));
    }
    return obj1 === obj2;
    }

    return arrayToSearch.map(e => areEqual(e, query)).indexOf(true);
}
*/