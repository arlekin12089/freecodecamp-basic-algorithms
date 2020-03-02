//Solution 1
function findLongestWordLength(str) {
   let newStr = str.split(" ");
   let longWord = 0;
  for(let i = 0; i < newStr.length; i++){
    if(newStr[i].length > longWord){
      longWord = newStr[i].length;
    }
  }
  return longWord;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");


//Solution 2 REDUCE METHOD
function findLongestWordLength(str) {
  return (str.split(" ").reduce((a,b) => a.length > b.length ? a:b)).length;  
}

findLongestWordLength("What is the average airspeed velocity of an unladen swallow");




//Solution 3 SORT METHOD
function findLongestWordLength(str) {
  let longWord = str.split(" ").sort((a,b) => b.length - a.length);
  return longWord[0].length; 
}
findLongestWordLength("What is the average airspeed velocity of an unladen swallow");

