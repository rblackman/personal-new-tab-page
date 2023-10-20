module.exports = {
	env: {
		browser: true,
		es2021: true
	},
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
		indent: [2, 'tab'],
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
		'prettier/prettier': [
			'error',
			{
				trailingComma: 'none',
				semi: true,
				singleQuote: true,
				editorconfig: true
			}
		]
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	}
};
