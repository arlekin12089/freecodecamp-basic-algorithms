/*Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.*/


function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);


//OR


function bouncer(arr) {
  let arrNew = [];
  arr.map((a)=>{
    if(Boolean(a)){
       arrNew.push(a);
      }
    })    
    return arrNew;
}

bouncer([false, null, 0, NaN, undefined, ""]);
