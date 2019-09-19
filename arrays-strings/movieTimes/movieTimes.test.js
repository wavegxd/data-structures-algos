const movieTimes = require('./movieTimes');

test('should check short array for matching movies', () => {
  const movieArray = [1, 2, 3];
  expect(movieTimes(movieArray, 4)).toBe(true);
});

test('should check a long array for matching movies', () => {
  const movieArray = [1, 4, 3, 5, 6, 8];
  expect(movieTimes(movieArray, 12)).toBe(true);
});
