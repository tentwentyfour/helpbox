"use strict";

module.exports = (λ, errorMessage = null, printException = false, crashFunction = process.exit.bind(process)) => {
    try {
        λ();
    } catch (error) {
        if (errorMessage) {
            console.error(errorMessage);
        }

        if (printException) {
            console.error(error);
        }

        crashFunction(1);
    }
};
