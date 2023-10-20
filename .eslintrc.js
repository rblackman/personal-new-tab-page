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
	extends: ['plugin:react/recommended', 'airbnb'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion: 12,
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'indent': [2, 'tab'],
		'no-tabs': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/react-in-jsx-scope': 'off',
		'comma-dangle': ['error', 'never'],
		'react/jsx-uses-react': 'off',
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never'
			}
		],
		'quote-props': ['error', 'consistent'],
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
		],
		'max-len': [2, 160],
		'linebreak-style': 0,
		'react/jsx-indent-props': [2, 'tab'],
		'@typescript-eslint/object-curly-spacing': [2, 'always']
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	}
};
