"use strict";

module.exports = (λ, interval) => {
    let timeoutId  = null;
    let promise    = null;
    let stop       = false;
    let λisRunning = false;

    const pollλ = () => {
        if (λisRunning) {
            return promise;
        }

        stop       = false;
        λisRunning = true;

        clearTimeout(timeoutId);

        return λ()
        .then(results => ({ error: false, results }))
        .catch(results => ({ error: true, results }))
        .then(({ error, results }) => {
            λisRunning = false;

            if (!stop) {
                timeoutId = setTimeout(pollλ, interval);
            }

            if (error) {
                return Promise.reject(results);
            }

            return results;
        });
    };

    pollλ.stop = () => {
        stop = true;

        clearTimeout(timeoutId);
    };

    return pollλ;
};
