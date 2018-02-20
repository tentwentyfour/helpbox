"use strict";

function createErrorType(name, initialize = undefined, prototype = undefined) {
    let Constructor = function (message) {
        let error = Object.create(Constructor.prototype);

        error.message = message;
        error.stack   = (new Error).stack;

        if (initialize) {
            initialize(error, message);
        }

        return error;
    };

    Constructor.prototype = Object.assign(Object.create(Error.prototype), prototype);

    return Constructor;
}

module.exports = createErrorType;
