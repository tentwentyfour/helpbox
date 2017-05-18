"use strict";

// `this` is not bound!
module.exports = (target, event, λ) => {
    if (target.once) {
        target.once(event, λ);

        return;
    }

    let on  = target.on || target.addListener || target.addEventListener;
    let off = target.off || target.removeListener || target.removeEventListener;

    const handler = function () {
        off.call(target, event, handler);

        λ(...arguments);
    };

    on.call(target, event, handler);
};
