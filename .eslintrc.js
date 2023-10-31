module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	globals: {
		React: 'readonly'
	},
	ignorePatterns: ['**/stories/*'],
	overrides: [
		{
			files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
			rules: { 'storybook/hierarchy-separator': 'error' }
		}
	],
	extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['react', 'import', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				trailingComma: 'none',
				semi: true,
				singleQuote: true,
				tabWidth: 2,
				useTabs: true,
				printWidth: 160,
				endOfLine: 'auto',
				quoteProps: 'consistent',
				jsxSingleQuote: false,
				jsxBracketSameLine: false,
				bracketSpacing: true,
				arrowParens: 'always'
			}
		]
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		},
		'react': {
			version: 'detect'
		}
	}
};
