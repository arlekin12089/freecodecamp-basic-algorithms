/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

//First method 

function titleCase(str) {
  str = str.split(" ");
  for(var i = 0; i < str.length; i++){
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
  }

  return str.join(" ");
}

titleCase("I'm a little tea pot");


//Second method

function titleCase(str) {
  let strNew = str.toLowerCase().split(" ");
  let newArr = [];
  strNew.map((word)=>{
   word =  word.slice(0,1).toUpperCase() + word.slice(1);
     newArr.push(word);
  })
    return newArr.join(" ");
}

titleCase("I'm a little tea pot");
