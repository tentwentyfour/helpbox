"use strict";

const head = require("lodash.head");

const makeTest = (name, λ) => [name, λ];

const runTests = tests => {
    return tests
    .filter(test => !test[1]())
    .map(head);
};

module.exports = {
    run:  runTests,
    make: makeTest
};
