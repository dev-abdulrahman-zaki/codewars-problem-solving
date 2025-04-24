function isIsogram(str){
    return str.length === str.toLowerCase().split("").filter((e,i,arr) => arr.indexOf(e) == i).join("").length;
    }

    /*
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}
    */
/*
function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}
*/
/*
function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}
*/