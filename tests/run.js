#!/usr/bin/env node

"use strict";

const chalk = require("chalk");

(async () => {
    let errors = (
        (await require("./delay-tests"))
        .concat(await require("./compact-tests"))
        .concat(await require("./regularly-tests"))
        .concat(await require("./methodify-tests"))
        .concat(await require("./demethodify-tests"))
        .concat(await require("./try-or-crash-tests"))
        .concat(await require("./add-one-time-listener-tests"))
    );

    if (errors.length) {
        errors.forEach(error => {
            console.log(chalk.red(`✘ ${error}`));
        });

        return;
    }

    console.log(chalk.green(`✔ All test passed!`));
})();
