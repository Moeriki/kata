
exports.add = function add(num1, num2) {
  return (num1 + num2)
    .replace('IIIII','V')
    .replace('IIII','IV')
    .replace('IIV','V')
  ;
}
