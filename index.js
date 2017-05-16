"use strict";

module.exports = {
    noConcurrentCalls: require("./source/no-concurrent-calls"),
    looselyMatches:    require("./source/loosely-matches"),
    resolveWhen:       require("./source/resolve-when"),
    methodify:         require("./source/methodify")
};
