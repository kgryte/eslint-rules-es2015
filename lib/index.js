'use strict';

var rules = {};

/**
* RULE: arrow-parens
*	Require parentheses to be used with arrow functions as needed. See [arrow-parens]{@link http://eslint.org/docs/rules/arrow-parens}.
*/
rules[ 'arrow-parens' ] = [ 2, 'as-needed' ];

/**
* RULE: arrow-spacing
*	Require a space before and after an arrow function's arrow. See [arrow-spacing]{@link http://eslint.org/docs/rules/arrow-spacing}.
*/
rules[ 'arrow-spacing' ] = [ 2, {
	'before': true,
	'after': true
}];

/**
* RULE: constructor-super
*	Require that constructors of derived classes call `super()`. See [constructor-super]{@link http://eslint.org/docs/rules/constructor-super}.
*/
rules[ 'constructor-super' ] = 2;

/**
* RULE: generator-star-spacing
*	Require a space between the `function` keyword and the star. See [generator-star-spacing]{@link http://eslint.org/docs/rules/generator-star-spacing}.
*/
rules[ 'generator-star-spacing' ] = [ 2, {
	'before': true,
	'after': false
}];

/**
* RULE: no-class-assign
*	Never allow a class declaration to be reassigned. See [no-class-assign]{@link http://eslint.org/docs/rules/no-class-assign}.
*/
rules[ 'no-class-assign' ] = 2;

/**
* RULE: no-const-assign
*	Never allow a variable declared as a constant be reassigned in a non-ES2015 environment. See [no-const-assign]{@link http://eslint.org/docs/rules/no-const-assign}.
*/
rules[ 'no-const-assign' ] = 2;

/**
* RULE: no-dupe-class-members
*	Never allow duplicate class members. See [no-duple-class-members]{@link http://eslint.org/docs/rules/no-dupe-class-members}.
*/
rules[ 'no-dupe-class-members' ] = 2;

/**
* RULE: no-this-before-super
*	Never allow `this` to be used before `super()` is called. See [no-this-before-super]{@link http://eslint.org/docs/rules/no-this-before-super}.
*/
rules[ 'no-this-before-super' ] = 2;

/**
* RULE: no-var
*	Allow the use of `var`. See [no-var]{@link http://eslint.org/docs/rules/no-var}.
*/
rules[ 'no-var' ] = 0;

/**
* RULE: object-shorthand
*	Do not require object shorthand. See [object-shorthand]{@link http://eslint.org/docs/rules/object-shorthand}.
*/
rules[ 'object-shorthand' ] = 0;

/**
* RULE: prefer-arrow-callback
*	Do not require an arrow callback. See [prefer-arrow-callback]{@link http://eslint.org/docs/rules/prefer-arrow-callback}.
*/
rules[ 'prefer-arrow-callback' ] = 0;

/**
* RULE: prefer-const
*	Prefer a `const` declaration if a `let` variable is not modified. See [prefer-const]{@link http://eslint.org/docs/rules/prefer-const}.
*/
rules[ 'prefer-const' ] = 1;

/**
* RULE: prefer-spread
*	Do not require the spread operator. See [prefer-spread]{@link http://eslint.org/docs/rules/prefer-spread}.
*/
rules[ 'prefer-spread' ] = 0;

/**
* RULE: prefer-reflect
*	Do not require the Reflect API. See [prefer-reflect]{@link http://eslint.org/docs/rules/prefer-reflect}.
*/
rules[ 'prefer-reflect' ] = 0;

/**
* RULE: prefer-template
*	Do not require template literals. See [prefer-template]{@link http://eslint.org/docs/rules/prefer-template}.
*/
rules[ 'prefer-template' ] = 0;

/**
* RULE: require-yield
*	Require a `yield` keyword in generator functions. See [require-yield]{@link http://eslint.org/docs/rules/require-yield}.
*/
rules[ 'require-yield' ] = 2;


// EXPORTS //

module.exports = rules;
