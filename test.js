'use strict'

const assert = require('node:assert');
const { hello, message } = require('.');

function testHello() {
  const actual = hello();
  const expected = 'world';

  assert.strictEqual(actual, expected);
  console.log('OK hello');
}

function testMessage() {
  const actual = message();
  const expected = 'world';

  assert.strictEqual(actual, expected);
  console.log('OK message');
}

testHello();
testMessage();