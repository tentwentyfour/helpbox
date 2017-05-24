"use strict";

module.exports = async (λ, predicate) => {
    let value;

    do {
        value = await λ();
    } while (!(await predicate(value)));
};
