function largestOfFour(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    let bigNum = arr[i].reduce((a,b) => a >b?a:b)
    newArr.push(bigNum)
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
