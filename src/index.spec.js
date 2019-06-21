const {add} = require('./');

it('should add I and I', () => {
  expect(add('I', 'I')).toBe('II');
})
