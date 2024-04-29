var intersect = function (args) {
if (!arguments.length) return [];
let input = [...arguments];
let firstArg = input[0];
let otherArgs = input.slice(1,);
let arr = [];
firstArg.forEach(e => {
    if (otherArgs.every(arr => arr.includes(e))){
        arr.push(e)
    }
});
    return arr;
};
    
    
    var a = ['dog', 'bar', 'foo']
    var b = ['foo', 'bar', 'cat'];
    var c = ['gin', 'foo', 'bar'];
   console.log(intersect(a, b, c)); //, ['bar', 'foo']);



var intersect = function (...args) {
    if (!arguments.length) return [];
    return args[0].filter(element =>
        args.slice(1).every(arr => arr.includes(element))
    );
};

/*
function intersect(...args) {
    const firstArg = args[0];
    const otherArgs = args.slice(1);
    const result = [];

    for (let i = 0; i < firstArg.length; i++) {
        const element = firstArg[i];
        let presentInAll = true;

        for (let j = 0; j < otherArgs.length; j++) {
            if (!otherArgs[j].includes(element)) {
                presentInAll = false;
                break;
            }
        }

        if (presentInAll) {
            result.push(element);
        }
    }

    return result;
}
*/


/*
var intersect = function () {
    var arr=[];
    if(!arguments.length)return arr;
    out:
    for(var i=0;i<arguments[0].length;i++){
      var str=arguments[0][i];
      for(var j=1;j<arguments.length;j++){
        if(arguments[j].indexOf(str)===-1)continue out;
      }
      arr.push(str);
    }
    return arr;
  };
*/

  /*
    var intersect = function () {
    if (!arguments.length) return [];
    var arr = Array.prototype.slice.call(arguments);
    
    return arr[0].filter(function(val, index){
      return arr.every(function(v, i){
        return v.indexOf(val) !== -1;
      })    
    });
  };
  */