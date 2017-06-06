"use strict";

/**
 * If `truthy` is a truthy, returns that truthy without doing anything else. If it is
 * a falsy, returns it and displays the assertion message.
 *
 * @function assert
 *
 * @param truthy  {Truthy|Falsy} The truthy to test.
 * @param message {String}       The message to display with console.error() when `truthy` is a falsy.
 *
 * @return {Any} Returns truthy.
 */
module.exports = (truthy, message) => {
    if (!truthy) {
        module.exports.errorLoggingFunction(message);
    }

    return truthy;
};

module.exports.errorLoggingFunction = console.error.bind(console);
