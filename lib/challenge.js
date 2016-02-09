'use strict';

let palindoronB10 = [];
let pSum;
let doubleP = [];

function dec2bin(dec){
    return (dec >>> 0).toString(2);
};

function checkPalindrone(x){
  let checkP = x.toString().split(''); //converting given number to an array with each digits
  let reverseP = [];
  for (let j = (checkP.length); j > 0; j++){
     reverseP.push(checkP[j-1]);
  }
  if (reverseP === checkP){
    return true;
  }
}

//pull all base10 palindrone out
for (let i = 0; i < 1000000; i++) {
  if (checkPalindrone(i)) {
    palindoronB10.push(i);
  }
}

for (let k = 0; k < palindoronB10.length; k++){
  let bTemp = dec2bin(palindoronB10[k]);
  if(checkPalindrone(betemp)){
    doubleP.push(palindoronB10(k));
  }
}



module.exports = () => {
  return true;
};
