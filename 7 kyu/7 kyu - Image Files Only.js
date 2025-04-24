function imageFilter(arr) {
    return arr.map(e => e.match(/^(.+)\.(bmp|gif|jpg|png|tiff)$/i));
    }


console.log(
    imageFilter([".bash_profile", "workspace.doc", "img0912.jpg"])
);
//, [    null, null, ["img0912.jpg", "img0912", "jpg"]   ]);




/*
function imageFilter(arr) {
let pattern = /^(?<fileName>[A-z0-9]{0,1})\.(?<ext>jpg|jpeg|png|bmp|gif|tiff|svg)$/igm
return arr.map(e => {
    let match = pattern.exec(e);
    if (match){
        return [match.groups.fileName, match.groups.ext];        
    } else{return null}
})
}
*/