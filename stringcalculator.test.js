const { add } = require('./stringcalculator');

test('return 0 on empty string', () => {
  expect(add('')).toBe(0);
});
