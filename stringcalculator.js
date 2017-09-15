function add(numbers) {
  if (numbers.match(/[,\n]/g)) {
    var numberArray = numbers.split(/[,\n]/g).map(numberStr => parseInt(numberStr));
    return numberArray.reduce(function(accumulator, currentValue) {
      return accumulator + parseInt(currentValue);
    });
  }
  if (numbers !== '') {
    return parseInt(numbers);
  }
  return 0;
}

module.exports = {
  add
};
