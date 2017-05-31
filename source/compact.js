"use strict";

/**
 * Deletes null/false/undefined values from the passed object.
 *
 * @function compact
 *
 * @param object {Object} The object to compact in-place.
 *
 * @return {Object} The modified `object`, for convenience
 */
module.exports = object => {
    const keys = Object.keys(object);

    for (let i = 0; i < keys.length; i++) {
        const key   = keys[i];
        const value = object[key];

        if (value === false || value === undefined || value === null) {
            delete object[key];
        }
    }

    return object;
};
