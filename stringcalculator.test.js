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

test('returns 3 on passing 3', () => {
  expect(add('3')).toBe(3);
});

test('returns 9 on passing 4,5', () => {
  expect(add('4,5')).toBe(9);
});

test('returns 0 on passing 0', () => {
  expect(add('0')).toBe(0);
});

test('returns 60 on passing 2,19,39', () => {
  expect(add('2,19,39')).toBe(60);
});

test('returns 108 on passing 4,8,15,16,23,42', () => {
  expect(add('4,8,15,16,23,42')).toBe(108);
});

test('returns 768 on passing 2,19,39,54,20,49,192,393', () => {
  expect(add('2,19,39,54,20,49,192,393')).toBe(768);
});

test('returns 3 on passing 1\n2', () => {
  expect(add('1\n2')).toBe(3);
});

test('returns 5 on passing 2\n3', () => {
  expect(add('2\n3')).toBe(5);
});

test('returns 5 on passing //;\n1;2', () => {
  expect(add('//;\n1;2')).toBe(3);
});
