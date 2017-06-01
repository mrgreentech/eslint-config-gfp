### 2.3.1
* Allow any style of IIFE's since prettier wants to write call arguments after the wrapping paranthesis.
	Now both following styles are allowed:
	`(function() {}())`
	`(function() {})()`
	Before only the top one was allowed.

### 2.3.0
* Added `'prefer-template': 0` to `browser.js` rules. The need for this is when the root `eslintrc` of a project uses the node.js rules but the web app src wants to use the browser rules.

### 2.2.0
* Removing the override of `"brace-style"` that ignored brace-style not aheering to the rules. Now we warn about braces not adheering to `"1tbs"`. Soon we will also error code that does not embrace `"1tbs"`.
* Introduced `node` ruleset to support both browser and node projects.

### 2.1.0
* Added rule linebreak-style with value 0.
* Added `.gitignore`

### 2.0.1
* Updated README

### 2.0.0
* Now has eslint and airbnb's eslint config as npm dependencies
* Updated rules to conform to airbnb 7.x.


### 1.0.0
* First version
