This is the config used for all products based on the Green Frontend platform.

# How to use
1. Install package:
	```
	npm install --save-dev eslint eslint-config-gfp
	```

2. Add lint script in package.json
	```
	"scripts": {
      "lint": "eslint *.js"
    },
    ```
3. Create `.eslintrc.json` in the root of the project.
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
	
	To use our **React JS rules** (including JSX support), use:
	```
	{
	    "extends": "gfp/react"
	}
	```
	
	To use our **Jest JS rules**, use:
	```
	{
	    "extends": "gfp/jest"
	}
	```

# Contributing

We use semantic versioning. That means that if you introduce a change that will break current API (the eslint rules fails) it is a MAJOR change.
If you introduce a change that only `"warn"` about a new rule it is considered a MINOR change.
