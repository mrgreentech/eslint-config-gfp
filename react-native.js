module.exports = {
    'env': {
        'node': false,
        'es6': true,
        'browser': false,
        'react-native/react-native': true
    },
    'plugins': [
        'react',
        'react-native'
    ],
    'extends': [
        'airbnb-base/legacy',
        'gfp/rules/base',
        'gfp/rules/es6',
        'gfp/react'
    ],
    rules: {
        'react-native/no-unused-styles': 2,
        'react-native/sort-styles': 2,
        'react-native/no-inline-styles': 2
    }
};
