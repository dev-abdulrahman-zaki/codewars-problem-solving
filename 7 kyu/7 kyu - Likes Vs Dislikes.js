function likeOrDislike(buttons) {
  // const buttonsStr = buttons.map(e => e.toString());
  if (!buttons.length) return "Nothing";
  let state = buttons[0];
  buttons.slice(1).forEach((element) => {
    if (element === state) {
      state = "Nothing";
    } else {
      state = element;
    }
  });
  return state;
}

// let x = likeOrDislike(["Dislike"]); //, Dislike );
// let x = likeOrDislike(["Like","Like"])                                                     //, Nothing );
// let x = likeOrDislike(["Dislike","Like"])                                                     //, Like );
// let x = likeOrDislike(["Like","Dislike","Dislike"])                                                     //, Nothing );
// let x = likeOrDislike(["Dislike","Dislike"])                                                     //, Nothing );
// let x = likeOrDislike(["Like","Like","Like"])                                                     //, Like );
// let x = likeOrDislike(["Like","Dislike"])                                                     //, Dislike );
// let x = likeOrDislike(["Dislike","Like","Dislike"])                                                     //, Dislike );
let x = likeOrDislike(["Like","Like","Dislike","Like","Like","Like","Like","Dislike"])                                                     //, Dislike );
// let x = likeOrDislike([])                                                     //, Nothing );
console.log(x);
