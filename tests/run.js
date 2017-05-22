#!/usr/bin/env node

"use strict";

const chalk = require("chalk");

(async () => {
    let errors = (
        (await require("./methodify-tests"))
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
