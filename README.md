This is the config used for all products based on the Green Frontend platform.

# How to use
1. Add to `package.json` `devDependencies`:
	```
	"devDependencies": {
	  ...
	  "gfp-eslint-config": "git+ssh://git@stash.mrgreen.zone:7999/gar/gfp-eslint-config.git",
	  ...
	}
	```
2. Run `npm install`
3. Create `.eslintrc.json` in project:
	```
	{
	    "extends": [
	        "./node_modules/gfp-eslint-config/.eslintrc"
	    ]
	}
	```
2. Add lint script in package.json
	```
	"scripts": {
      "lint": "eslint"
    },
    ```
