function mutation(arr) {
  var first_word = arr[0].toLowerCase();
  var second_word =arr[1].toLowerCase();

for(var i = 0;i<second_word.length;i++){
       var character =false;
  for(var j =0; j<first_word.length;j++){

    if(second_word.charAt(i)===first_word.charAt(j)){
       character = true;
      break;

    }


  }
  if(!character){
    return false;
    }
}
  return true;
}

mutation(["hello", "hey"]);
