"use strict";

/*
* Creates a version of λ that cannot be executed concurrently.
*
* Returns the Promise returned by λ.
*/
module.exports = λ => {
    let locked  = false;
    let promise = null;

    return async () => {
        if (locked) {
            return promise;
        }

        locked = true;

        try {
            const results = await λ();

            locked = false;

            return results;
        } catch (error) {
            locked = false;

            return Promise.reject(error);
        }
    };
};
