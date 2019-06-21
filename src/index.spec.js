const {add} = require('./');

it('should add I and I', () => {
  expect(add('I', 'I')).toBe('II');
})

it('should add I and II', () => {
  expect(add('I', 'II')).toBe('III');
})

it('should add I and III', () => {
  expect(add('I', 'III')).toBe('IV');
})

it('should add II and III', () => {
  expect(add('II', 'III')).toBe('V');
})
