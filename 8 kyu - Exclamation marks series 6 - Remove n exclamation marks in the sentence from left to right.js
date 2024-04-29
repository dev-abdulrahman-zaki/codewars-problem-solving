
function remove(s, n){
let i = 0;
while (i<n){
    s = s.replace("!", "");
    i++;
}
return s;
}




console.log(
    remove("!!!Hi !!hi!!! !hi",1)
);
