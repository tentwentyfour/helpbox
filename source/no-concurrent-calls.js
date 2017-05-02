"use strict";

/*
* Creates a version of λ that cannot be executed concurrently.
*
* Expects λ to take no arguments and to return a Promise.
* When concurrent calls get cancelled, the wrapping function returns
* undefined. Otherwise, it returns the Promise returned by λ.
*/
module.exports = λ => {
    let locked = false;

    return () => {
        if (locked) {
            return;
        }

        locked = true;

        λ().then(
            results => {
                locked = false;

                return results;
            },

            error => {
                locked = false;

                return Promise.reject(error);
            }
        );
    };
};
