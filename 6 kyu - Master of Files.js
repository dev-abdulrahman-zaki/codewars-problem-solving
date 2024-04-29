String.prototype.isAudio= function(){
    return /^[A-z]{1,}\.(mp3|flac|alac|aac)$/.test(this);
  };
  String.prototype.isImage= function(){
    return /^[A-z]{1,}\.(jpg|jpeg|png|bmp|gif)$/.test(this);
  };