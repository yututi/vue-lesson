module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		"plugin:vue/vue3-essential",
		"@vue/standard"
	],
	parserOptions: {
		parser: "babel-eslint"
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		indent: [2, "tab"],
		"no-tabs": 0,
		quotes: ["error", "double"],
		"multiline-ternary": ["error", "never"]
	}
}
