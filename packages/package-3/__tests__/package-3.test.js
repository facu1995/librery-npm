'use strict';

const package3 = require('..');
const assert = require('assert').strict;

assert.strictEqual(package3(), 'Hello from package3');
console.info('package3 tests passed');
