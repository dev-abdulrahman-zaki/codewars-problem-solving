function killer(suspectInfo, dead) {
    for (key in suspectInfo) {
      if (dead.every((e) => suspectInfo[key].includes(e))) {
        return key;
      }
    }
  }