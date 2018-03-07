
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
//from the end
  for(var i = 0; i < target.length ; i++){
    var letter_str = str[str.length - target.length + i];
    var letter_target = target[i];
    if(letter_str !== letter_target){
      return false;
    }
  }
  return true;
}

confirmEnding("Bastian", "n");

//from the end
 return str.substr(str.length-target.length) === target;

//from the start
 function confirmEnding(str, target) {
   // "Never give up and good luck will find you."
   // -- Falcor

  return str.substr(0, target.length) === target;
 }

 confirmEnding("nastian", "nus");
 //from the start
 function confirmEnding(str, target) {
   // "Never give up and good luck will find you."
   // -- Falcor
 //from the end
   for(var i = 0; i < target.length ; i++){
     var letter_str = str[i];
     var letter_target = target[i];
     if(letter_str !== letter_target){
       return false;
     }
   }
   return true;
 }
