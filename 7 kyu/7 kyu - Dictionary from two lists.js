function createDict(keys, values){
    let dictionary = {};
     keys.forEach((key,i) => dictionary[key] = (values[i] === undefined ? null : values[i]));
     return dictionary;
   }

keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
console.log(createDict(keys, values));

/*
function createDict(keys, values){
  return keys.reduce(function(o, v, i){
    return o[v] = i in values ? values[i] : null, o;
  }, {});
}
*/

/*
const createDict = (keys, values) => {
  const obj = {}
  
  keys.forEach((key, i) => {
    obj[key] = values[i] ?? null
  })
  
  return obj
}
*/

/*
function createDict(keys, values) {
  var obj = {}
  
  for (var i = 0; i < keys.length; i++) {
    obj[keys[i]] = i < values.length ? values[i] : null
  }
  
  return obj
}
*/