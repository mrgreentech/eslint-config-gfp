This is the config used for all products based on the Green Frontend platform.

# How to use
1. Install package:
	```
	npm install --save-dev eslint eslint-config-gfp
	```
2. Create `.eslintrc.json` in project.
	To use our **browser rules** (comes with angular environment, made for ES5):
	```
	{
	    "extends": "gfp"
	}
	```

	To use our **node JS rules** (made for ES6 progressively), use:
	```
	{
	    "extends": "gfp/node"
	}
	```

3. Add lint script in package.json
	```
	"scripts": {
      "lint": "eslint *.js"
    },
    ```

# Contributing

We use semantic versioning. That means that if you introduce a change that will break current API (the eslint rules fails) it is a MAJOR change.
If you introduce a change that only `"warn"` about a new rule it is considered a MINOR change.
