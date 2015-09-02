'use strict';

var merge = require( 'utils-merge2' )(),
	rules = require( './../lib' ),
	RULES = require( './existing_rules.json' );

// Merge the rules for ES2015 features into an existing ESLint rule set...
RULES = merge( RULES, rules );

console.dir( RULES );
