function trim(str, size) {
    if (str.length > size && size > 3){return str.slice(0,size-3)+"..."}
    else if (str.length <= size){return str;}
    else if (size <= 3){return str.slice(0,size)+"...";}
    }