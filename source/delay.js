"use strict";

module.exports = (λ, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                resolve(await λ());
            } catch (error) {
                reject(error);
            }
        }, delay || 0);
    });
};
