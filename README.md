Rules: ES2105
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [ESLint](http://eslint.org/) rules for ES2015 features.


## Installation

``` bash
$ npm install eslint-rules-es2015
```


## Usage

``` javascript
var rules = require( 'eslint-rules-es2015' );
```

#### rules

[ESLint](http://eslint.org/) rules for ES2015 features.

``` javascript
console.dir( rules );
/*
	{
		'arrow-parens': [ 2, 'as-needed' ],
		'arrow-spacing': [ 2, {
			'before': true,
			'after': true
		}],
		...
	}
*/
```


## Examples

``` javascript
var merge = require( 'utils-merge2' )(),
	rules = require( 'eslint-rules-es2015' ),
	RULES = require( './existing_rules.json' );

// Merge the rules for ES2015 features into an existing ESLint rule set...
RULES = merge( RULES, rules );

console.dir( RULES );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/eslint-rules-es2015.svg
[npm-url]: https://npmjs.org/package/eslint-rules-es2015

[travis-image]: http://img.shields.io/travis/kgryte/eslint-rules-es2015/master.svg
[travis-url]: https://travis-ci.org/kgryte/eslint-rules-es2015

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/eslint-rules-es2015/master.svg
[codecov-url]: https://codecov.io/github/kgryte/eslint-rules-es2015?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/eslint-rules-es2015.svg
[dependencies-url]: https://david-dm.org/kgryte/eslint-rules-es2015

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/eslint-rules-es2015.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/eslint-rules-es2015

[github-issues-image]: http://img.shields.io/github/issues/kgryte/eslint-rules-es2015.svg
[github-issues-url]: https://github.com/kgryte/eslint-rules-es2015/issues
