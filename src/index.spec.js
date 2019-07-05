const {add} = require('./');

it('should add I and I', () => {
  expect(add('I', 'I')).toBe('II');
});

it('should add I and II', () => {
  expect(add('I', 'II')).toBe('III');
  expect(add('II', 'I')).toBe('III');
});

it('should add I and III', () => {
  expect(add('I', 'III')).toBe('IV');
  expect(add('III', 'I')).toBe('IV');
});

it('should add II and III', () => {
  expect(add('II', 'III')).toBe('V');
  expect(add('III', 'II')).toBe('V');
});

it('should add I and IV', () => {
  expect(add('I', 'IV')).toBe('V');
  expect(add('IV', 'I')).toBe('V');
});

it('should add X and V', () => {
  expect(add('X', 'V')).toBe('XV');
  expect(add('V', 'X')).toBe('XV');
});
