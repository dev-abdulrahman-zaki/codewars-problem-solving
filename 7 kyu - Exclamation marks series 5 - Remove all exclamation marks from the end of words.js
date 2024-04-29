function remove (string) {
    string = string.replace(/!+ /g, " ");
    string = string.replace(/!{1,}$/gm, ""); 
    return string;
    }