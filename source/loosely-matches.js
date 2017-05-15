"use strict";

const flow    = require("lodash.flow");
const deburr  = require("lodash.deburr");
const toLower = require("lodash.tolower");

const looseMatchTransform = flow(deburr, toLower);

module.exports = (haystack, needle) => {
    return looseMatchTransform(haystack).indexOf(looseMatchTransform(needle)) !== -1;
};
