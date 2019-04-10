module.exports = {
    'env': {
        'node': false,
        'es6': true,
        'browser': true
    },
    'plugins': [
        'react'
    ],
    'extends': [
        'airbnb-base/legacy',
        'gfp/rules/base',
        'gfp/rules/es6'
    ],
    parser: 'babel-eslint',
    rules: {
        'prefer-destructuring': 2,
        'react/no-deprecated': 2,
        'react/no-did-mount-set-state': 2,
        'react/no-did-update-set-state': 2,
        'react/no-direct-mutation-state': 2,
        'react/no-will-update-set-state': 2,
        'react/prefer-es6-class': [2, 'always'],
        'react/react-in-jsx-scope': 2,
        'react/require-render-return': 2,
        'react/jsx-closing-bracket-location': 2,
        'react/jsx-closing-tag-location': 2,
        'react/jsx-curly-spacing': [2, { 'when': 'never' }],
        'react/jsx-key': 2,
        'react/jsx-no-duplicate-props': 2,
        'react/jsx-uses-vars': 2,
        'react/jsx-uses-react': 2
    }
};
