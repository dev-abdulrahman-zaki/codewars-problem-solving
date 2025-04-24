function remove (string) {
    return string.replace(/!+([^!])/g, "$1")
  }