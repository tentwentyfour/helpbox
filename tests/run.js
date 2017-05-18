#!/usr/bin/env node

"use strict";

const chalk = require("chalk");

let errors = require("./methodify-tests")
.concat(require("./add-one-time-listener-tests"));

if (errors.length) {
    errors.forEach(error => {
        console.log(chalk.red(`✘ ${error}`));
    });

    process.exit(1);
}

console.log(chalk.green(`✔ All test passed!`));
