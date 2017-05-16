"use strict";

const tester    = require("./framework");
const methodify = require("../source/methodify");

module.exports = tester.run([
    tester.make("methodify() should properly methodify simple functions", () => {
        const λ = visit => {
            return visit.test;
        };

        const visit = { test: 1, λ: methodify(λ) };

        return visit.λ() === visit.test;
    })
]);
