const stringLengh = require('./app');
const reverseString = require('./task2');
const {add, sub, mul, div } = require('./task3');
const capitalizeString = require('./task4')
test('the lengh of hello is 5', ()=> {
  expect(stringLengh('hello')).toBe(5);
});

test('the string of hello is olleh', ()=> {
  expect(reverseString('hello')).toBe('olleh');
});

describe('based calculation', ()=> {
  test('the sum of 1 +1 is 2', () =>{
    expect((add(1, 1))).toBe(2);
  })
  test('the sub of 2 - 1 is 1', () =>{
    expect((sub(2, 1))).toBe(1);
  })
  test('the mul of 2 * 2 is 4', () =>{
    expect((mul(2, 2))).toBe(4);
  }),
  test('the div of 2 / 2 is 1', () =>{
    expect((div(2, 2))).toBe(1);
  });



})

// Using TDD

test('Capitalize a first lettre of a string hello is Hello', () =>{
  expect((capitalizeString('hello'))).toBe('Hello');
});
