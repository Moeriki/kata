
exports.add = function add(num1, num2) {
  return (num1 + num2)
    .replace('IV','IIII')
    .replace('IIIII','V')
    .replace('IIII','IV')
  ;
}
