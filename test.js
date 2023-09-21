'use strict'

const assert = require('node:assert');
const { hello } = require('.');

function test() {
  const actual = hello();
  const expected = 'world';

  assert.strictEqual(actual, expected);
}

test();