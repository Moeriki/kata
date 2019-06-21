module.exports = function () {
  return {
    env: {      type: 'node',
      runner: 'node'
    },
    files: ['src/**/*.js', '!src/**/*.spec.js'],
    tests: ['src/**/*.spec.js'],
    testFramework: 'jest'
  };
};
