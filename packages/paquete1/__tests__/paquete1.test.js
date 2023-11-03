'use strict';

const paquete1 = require('..');
const assert = require('assert').strict;

assert.strictEqual(paquete1(), 'Hello from paquete1');
console.info('paquete1 tests passed');
