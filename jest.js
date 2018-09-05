module.exports = {
    'env': {
        'node': true,
        'es6': true,
        'browser': false,
        'jest': true
    },
    'plugins': [
        'jest'
    ],
    'extends': [
        'airbnb-base/legacy',
        'gfp/rules/base',
        'gfp/rules/es6'
    ],
    rules: {
        'jest/no-disabled-tests': 2,
        'jest/valid-expect': 2,
        'jest/no-identical-title': 2
    }
};
