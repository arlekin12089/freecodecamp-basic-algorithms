function palindrome(str){
  str = str.toLowerCase().replace(/[\W_]/g, '');
  for(var i = 0; i < str.length/2; i++){
    var start = str.charAt(i);
    var end = str.charAt(str.length - 1 - i);
    if(start !== end){
      return false;
    }
  }
  return true;
}
palindrome("eye");
