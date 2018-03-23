"use strict";

/**
 * Returns the number of decimals in provided number.
 * It works also for string containing valid number.
 *
 * @function numberOfDecimals
 *
 * @param number {Number|String} The number to check.
 *
 * @return {Number} A number of decimals (0 for integer).
 */
module.exports = number => {
    return ((number.toString()).split('.')[1] || []).length;
};
