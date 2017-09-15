function add(numbers) {
  if (numbers.includes(',')) {
    var numberArray = numbers.split(',').map(numberStr => parseInt(numberStr));
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
