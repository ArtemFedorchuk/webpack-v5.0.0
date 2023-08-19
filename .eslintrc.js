module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
	},
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: ['eslint:recommended', "prettier"],
	rules: {
		'no-console': 'warn',
		'no-unused-vars': 'error',
	},
};
