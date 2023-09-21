'use strict'

const assert = require('node:assert');
const { hello } = require('.');

function testHello() {
  const actual = hello();
  const expected = 'world';

  assert.strictEqual(actual, expected);
  console.log('OK hello');
}

testHello();