module.exports = {
    'env': {
        'jasmine': true,
        'angular/mocks': true
    },
    'plugins': [
        'jasmine',
        'angular'
    ],
    'globals': {
    // "false" indicates that we do not allow reassigning the global
        'angular': false,
        'Firebase': false
    },
    'extends': [
        'airbnb-base/legacy',
        './rules/base.js'
    ],
    'rules': {
        // allow "useless" escape (we use it for escaping URLs)
        'no-useless-escape': 0,
        // allow underscore dangle (Kambi's global object)
        'no-underscore-dangle': 0,
        // migrate to forcing 1tbs. no error for now, but will be up ahead
        'brace-style': ['warn', '1tbs']
    }
};
