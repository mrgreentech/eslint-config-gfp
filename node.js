module.exports = {
    'env': {
        'node': true,
        'es6': true,
        'browser': false,
        'mocha': true
    },
    'plugins': [
    ],
    'extends': [
        'airbnb-base/legacy',
        'gfp/rules/base'
    ],
    rules: {
        // disallow modifying variables that are declared using const
        'no-const-assign': 'error',
        // suggest using template literals instead of string concatenation
        // http://eslint.org/docs/rules/prefer-template
        'prefer-template': 'error',
        // specify whether double or single quotes should be used
        // Override Airbnb and allow template literals
        quotes: ['error', 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true
        }],
        // enforce usage of spacing in template strings
        // http://eslint.org/docs/rules/template-curly-spacing
        'template-curly-spacing': 'error'
    }
};
