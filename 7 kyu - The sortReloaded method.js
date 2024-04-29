Array.prototype.sortReloaded = function(dir = "asc") {
    return dir === "asc" ? [...this].sort((a,b)=>a-b) : dir === "desc" ? [...this].sort((a,b)=>b-a) : false;
}