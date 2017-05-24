"use strict";

const tester     = require("./framework");
const tryOrCrash = require("../source/try-or-crash");

const crashException = new Error("crashed");

const noop = () => {};

const crash = () => {
    throw crashException;
};

module.exports = tester.run([
    tester.make("tryOrCrash() should crash if λ throws", () => {
        let crashed = false;

        const setCrashed = () => crashed = true;

        tryOrCrash(crash, null, false, setCrashed);

        return crashed === true;
    }),

    tester.make("tryOrCrash() should not crash if λ does not throw", () => {
        let crashed = false;

        const setCrashed = () => crashed = true;

        tryOrCrash(noop, null, false, setCrashed);

        return crashed === false;
    })
]);
