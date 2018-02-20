"use strict";

/**
 * Return a constructor for a new error type.
 *
 * @function createErrorType
 *
 * @param initialize {Function} A function that gets passed the constructed error and the passed message and
 *                              runs during the construction of new instances.
 * @param prototype  {Object}   Additional properties and methods for the new error type.
 *
 * @return {Function} The constructor for the new error type.
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
