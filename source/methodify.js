"use strict";

/*
* Takes a function that expects an object as its first parameter and
* returns a function that calls the original function with `this` as
* its first parameter.
*
* `this` will be bound to null inside the returned function.
*/
module.exports = λ => {
    return function () {
        return λ.apply(null, [this].concat(arguments));
    };
};
