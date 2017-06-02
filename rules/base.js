module.exports = {
    rules: {
        // force 4-space indentation, force switch blocks to be indented
        indent: [2, 4, { SwitchCase: 1 }],
        'space-before-function-paren': [2, 'never'],
        'func-names': 0,
        // allow vars to be declared in nested funcs
        'vars-on-top': 0,
        // don't care about max-length
        'max-len': 0,
        // allow unused variables
        'no-unused-vars': 0,
        // allow to reference functions that are defined below
        'no-use-before-define': 0,
        // allow to reassign parameters
        'no-param-reassign': 0,
        // require "new" keyword to only be used with Caps, but allow Caps to be used without new.
        // Allowed:
        // var p = new Person();
        // var p = Person();
        // Not allowed:
        // var p = new person();
        'new-cap': [2, { capIsNew: false }],
        // allow to log to console
        'no-console': 0,
        // don't warn about unnecessarily quoted props
        'quote-props': 0,
        // don't warn about padded blocks
        'padded-blocks': 0,
        // allow using prototype methods on Object
        'no-prototype-builtins': 0,
        // allow usage of ++
        'no-plusplus': 0,
        // don't warn about inconsitent windows/unix linebreaks
        'linebreak-style': 0,
        // allow any IIFE style:
        // (function() {}())
        // (function() {})()
        'wrap-iife': ['error', 'any']
    },
    globals: {}
};
