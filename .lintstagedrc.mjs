import path from 'path';

const buildEslintCommand = (filenames) => [
	`eslint --fix  ${filenames.map((f) => path.relative(process.cwd(), f)).join('  ')}`
];

const buildPrettierCommand = (filenames) => [
	`prettier ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')} --write`
];

const config = {
	'**/*.(ts|tsx)': () => 'npx tsc --noEmit',
	'*.{js,jsx,ts,tsx}': [buildPrettierCommand, buildEslintCommand],
	'**/*.(md|json)': [buildPrettierCommand]
};

export default config;
