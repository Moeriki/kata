const numerals = [
  {
    numeral: 'I'
  },
  {
    numeral: 'V',
    prefixNumeral: 'I',
    deconstructed:'IIIII'
  },
  {
    numeral: 'X',
    prefixNumeral: 'I',
    deconstructed:'IIIIIIIIII'
  }
];
function deconstruct(num){
  return numerals
}

function construct(num){

}

exports.add = function add(num1, num2) {
  // return (num1 + num2)
  //   .replace('IV','IIII')
  //   .replace('IIIII','V')
  //   .replace('IIII','IV');
    const deconstructedNum1 = deconstruct(num1);
    const deconstructedNum2 = deconstruct(num2);

    return construct(deconstructedNum1 + deconstructedNum2);
}


// 99 = XCIX
  // 8 = IIX
