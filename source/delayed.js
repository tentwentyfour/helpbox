"use strict";

module.exports = (λ, delay) => {
    return function () {
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    resolve(await λ(...arguments));
                } catch (error) {
                    reject(error);
                }
            }, delay || 0);
        });
    };
};
