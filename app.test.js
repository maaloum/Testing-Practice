const stringLengh = require('./app');
test('the lengh of hello is 5', ()=> {
  expect(stringLengh('hello')).toBe(5);
});
