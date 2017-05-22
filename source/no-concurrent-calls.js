"use strict";

/*
* Creates a version of λ that cannot be executed concurrently.
*
* Returns the Promise returned by λ.
*/
module.exports = λ => {
    let locked  = false;
    let promise = null;

    return () => {
        if (locked) {
            return promise;
        }

        locked = true;

        promise = λ().then(
            results => {
                locked = false;

                return results;
            },

            error => {
                locked = false;

                return Promise.reject(error);
            }
        );

        return promise;
    };
};
