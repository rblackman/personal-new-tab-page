// build: Changes that affect the build system or external dependencies
// (example scopes: npm, github actions, vercel, etc.)
// docs: Documentation only changes
// feature: A new feature
// bug: A bug fix
// perf: A code change that improves performance
// refactor: A code change that neither fixes a bug nor adds a feature
// style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
// test: Adding missing tests or correcting existing tests
// revert: Reverts a previous commit.
// chore: A small change not covered by the other topics.
// package: A change in the package.json file

const config = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'body-leading-blank': [1, 'always'],
		'body-max-line-length': [2, 'always', 100],
		'footer-leading-blank': [1, 'always'],
		'footer-max-line-length': [2, 'always', 100],
		'header-max-length': [2, 'always', 100],
		'scope-case': [2, 'always', 'lower-case'],
		'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
		'subject-empty': [2, 'never'],
		'subject-full-stop': [2, 'never', '.'],
		'type-case': [2, 'always', 'lower-case'],
		'type-empty': [2, 'never'],
		'type-enum': [2, 'always', ['build', 'add', 'feature', 'bug', 'chore', 'docs', 'refactor', 'revert', 'test', 'style', 'perf', 'package']]
	}
};

export default config;
