This is the config used for all products based on the Green Frontend platform.

# How to use
1. Add `.npmrc` file to your project:
	```
	registry = http://npm.mrgreen.zone:1080/
	```
2. Install package:
	```
	npm install --save-dev gfp-eslint-config
	```
3. Create `.eslintrc.json` in project.
	To use our **browser rules** (comes with angular environment, made for ES5):
	```
	{
	    "extends": [
	        "./node_modules/gfp-eslint-config/.eslintrc"
	    ]
	}
	```

	To use our **node JS rules** (made for ES6 progressively), use:
	```
	{
	    "extends": [
	        "./node_modules/gfp-eslint-config/node.js"
	    ]
	}
	```
2. Add lint script in package.json
	```
	"scripts": {
      "lint": "eslint *.js"
    },
    ```

# Contributing

We use semantic versioning. That means that if you introduce a change that will break current API (the eslint rules fails) it is a MAJOR change.
If you introduce a change that only `"warn"` about a new rule it is considered a MINOR change.
