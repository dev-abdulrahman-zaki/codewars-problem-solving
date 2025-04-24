function array(s) {
    return (s.split(",").length<=2) ? null : s.split(",").slice(1,-1).join(" ");
    }