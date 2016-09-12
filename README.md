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
      "lint": "eslint *.js"
    },
    ```
