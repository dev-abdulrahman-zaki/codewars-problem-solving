function capMe(names) {
    return names.map(e => e[0].toUpperCase()+e.toLowerCase().slice(1,))
    }