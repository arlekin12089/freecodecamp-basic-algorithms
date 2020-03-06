function truncateString(str, num) {
  // Clear out that junk in your trunk
  if(str.length <= num) {
    return str;
  }
  return str.slice(0, num > 3 ? num - 3 : num) + "...";
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);



function truncateString(str, num) {
  //return str.split(" ")[0] > num ? str.slice(0,num);
  let a = str.split(" ").length;
  if(a >= num){
      return str.slice(0,num) + "...";
  }else {
    return str;
  }

}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
