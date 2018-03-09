function rot13(str) { // LBH QVQ VG!
  str = str.split("").map(cisper).join("");
  return str;
}
function cisper(letter){
  var symbolreg = /[^a-zA-Z]/g;
  if(symbolreg.test(letter)){
    return letter;
  }
  var codeascii = letter.charCodeAt(0);
  if(codeascii > 77){
    codeascii -= 13;
  }else{
    codeascii +=13;
  }
 return String.fromCharCode(codeascii);
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
