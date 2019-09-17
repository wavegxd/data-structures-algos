const mergeArrays = require('./mergeArrays');

test('should merge two arrays with numbers', () => {
  const oneArr = [1, 3, 5, 7];
  const twoArr = [2, 4, 6, 8];
  const resultArr = [1, 2, 3, 4, 5, 6, 7, 8];
  expect(mergeArrays(oneArr, twoArr)).toStrictEqual(resultArr);
});

test('should pass if both arrays are empty', () => {
  expect(mergeArrays([], [])).toStrictEqual([]);
});

test('should merge if first array is empty', () => {
  expect(mergeArrays([1, 2, 3], [])).toStrictEqual([1, 2, 3]);
});

test('should merge if second array is empty', () => {
  expect(mergeArrays([], [4, 5, 6])).toStrictEqual([4, 5, 6]);
});

test('should merge different length arrays', () => {
  expect(mergeArrays([1, 3, 5, 7], [2, 6, 10])).toStrictEqual([
    1,
    2,
    3,
    5,
    6,
    7,
    10,
  ]);
});
