"use strict";

const times = require("lodash.times");

const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

module.exports = length => {
    return times(length, () => {
        return characters[Math.floor(Math.random() * characters.length)];
    }).join("");
};
