const sum = require('./sum');

test('Adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});