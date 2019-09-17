const reverse = require('./reverseString');

test('empty string', () => {
  const str = '';
  expect(reverse(str.split('')).join('')).toEqual('');
});

test('one letter', () => {
  const str = 'A';
  expect(reverse(str.split('')).join('')).toEqual('A');
});

test('long string', () => {
  const str = 'ABCDE';
  expect(reverse(str.split('')).join('')).toEqual('EDCBA');
});
