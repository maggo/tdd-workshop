const { add } = require('./stringcalculator');

test('returns 0 on empty string', () => {
  expect(add('')).toBe(0);
});

test('returns 1 on passing 1', () => {
  expect(add('1')).toBe(1);
});

test('returns 3 on passing 1,2', () => {
  expect(add('1,2')).toBe(3);
});
