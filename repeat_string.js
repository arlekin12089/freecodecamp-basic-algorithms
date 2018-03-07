function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num <= 0){
    return "";
  }
  var final_string = [];
    for(var i = 0; i<num; i++){
   final_string.push(str);
  }
  return final_string.join("");
}

repeatStringNumTimes("abc", 3);
