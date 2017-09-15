function add(numbers) {
  var delimiter = /[,\n]/g;
  if (numbers.indexOf('//') === 0) {
    var regex = /\/\/(.)\n(.*)/
    var foo = regex.exec(numbers);
    delimiter = foo[1];
    numbers = foo[2];
  }
  if (numbers.match(delimiter)) {
    var numberArray = numbers.split(delimiter).map(numberStr => parseInt(numberStr));
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
