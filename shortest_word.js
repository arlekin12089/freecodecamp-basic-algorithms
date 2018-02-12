function findShortestWord(str){
  str = str.split(" ");
  var min = str[0].length;
  for(var i = 1; i < str.length; i++) {
    if(str[i].length < min) {
      min = str[i].length;
    }
  }
  return min;
}
findLongestWord("The quick brown fox jumped over a lazy dog");
