"use strict";

/**
 * Return a constructor for a new error type.
 *
 * @function createErrorType
 *
 * @param delay          {Function} The delay, in ms.
 * @param otherArguments {Object}   Additional arguments to pass to λ.
 *
 * @return {Function} A function that returns a promise that resolves with the return value of λ.
 */
function createErrorType(initialize = undefined, prototype = undefined) {
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
