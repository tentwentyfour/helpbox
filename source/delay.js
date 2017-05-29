"use strict";

const delayed = require("./delayed");

module.exports = (λ, delay, ...otherArguments) => {
    return delayed(λ, delay)(...otherArguments);
};
