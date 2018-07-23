module.exports = {
    'env': {
        'node': true,
        'es6': true,
        'browser': false,
        'protractor': true,
        'mocha': true
    },
    'plugins': [
        'protractor'
    ],
    'extends': [
        'airbnb-base/legacy',
        'gfp/rules/base',
        'gfp/rules/es6'
    ],
    rules: {
        'bare-element-finders': 2,
        'by-css-shortcut': 2,
        'correct-chaining': 2,
        'limit-selector-depth': 2,
        'missing-perform': 2,
        'missing-wait-message': 2,
        'no-absolute-url': 2,
        'no-array-finder-methods': 2,
        'no-browser-driver': 2,
        'no-browser-pause': 2,
        'no-browser-sleep': 2,
        'no-by-xpath': 2,
        'no-compound-classes': 2,
        'no-get-in-it': 2,
        'no-get-inner-outer-html': 2,
        'no-get-location-abs-url': 2,
        'no-get-raw-id': 2,
        'no-invalid-selectors': 2,
        'no-promise-in-if': 2,
        'no-shadowing': 2,
        'use-first-last': 2,
        'use-promise-all': 2,
        'valid-by-id': 2,
        'valid-by-tagname': 2,
        'valid-locator-type': 2
    }
};
