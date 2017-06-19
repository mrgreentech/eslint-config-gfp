### 3.0.0
* Updated dependencies `eslint-config-airbnb-base 11` (from 7), `eslint-plugin-angular 2` (from 1), `eslint-plugin-import 2` (from 1), `eslint-plugin-jasmine 2 (from 1)

#### Updated rules

**Browser**

* Force seting `var viewModel = this;` in controllers (breaking)
* Do not allow assigning to `$scope`, thus force using `controllerAs` syntax (breaking)
* Disallow unused DI parameters (breaking)
* Disallow the use of `$http` `success()` and `error()` (breaking)
* Force DI parameters to be sorted alphabetically (breaking)
* Disallow focused tests (to be checked in) (breaking)

**General**

* Disallow unused variables except when they're arguments (breaking)


### 2.3.2
* Fixed wrong declaration of `wrap-iife`

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
