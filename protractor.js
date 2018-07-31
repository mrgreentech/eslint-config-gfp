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
        'protractor/bare-element-finders': 2,
        'protractor/by-css-shortcut': 2,
        'protractor/correct-chaining': 2,
        'protractor/limit-selector-depth': 2,
        'protractor/missing-perform': 2,
        'protractor/no-absolute-url': 2,
        'protractor/no-array-finder-methods': 2,
        'protractor/no-browser-driver': 2,
        'protractor/no-browser-pause': 2,
        'protractor/no-browser-sleep': 2,
        'protractor/no-compound-classes': 2,
        'protractor/no-get-in-it': 2,
        'protractor/no-get-inner-outer-html': 2,
        'protractor/no-get-location-abs-url': 2,
        'protractor/no-get-raw-id': 2,
        'protractor/no-invalid-selectors': 2,
        'protractor/no-promise-in-if': 2,
        'protractor/no-shadowing': 2,
        'protractor/use-first-last': 2,
        'protractor/use-promise-all': 2,
        'protractor/valid-by-id': 2,
        'protractor/valid-by-tagname': 2,
        'protractor/valid-locator-type': 2
    }
};
