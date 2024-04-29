function remove (string) {
    return string.split(" ").filter(e => e.indexOf("!") !== e.lastIndexOf("!") || !e.includes("!")).join(" ") || "";
    }


    console.log(
        remove("Hi Hi! Hi!")
    );