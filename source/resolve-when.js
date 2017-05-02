"use strict";

// Returns a promise that resolves when λ returns true.
module.exports = λ => new Promise((resolve, reject) => {
    let retry;

    (retry = () => {
        try {
            if (λ()) {
                resolve();
            } else {
                setTimeout(retry, 50);
            }
        } catch (error) {
            reject(error);
        }
    })();
});
