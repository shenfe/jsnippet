const throttle = function (func, wait = 100, options = {}) {
    const { leading, trailing } = options;
    let timeout = null;
    let previous = 0;
    let result;

    const throttled = function () {
        const now = +new Date();
        if (!previous && leading === false) previous = now;
        const remaining = wait - (now - previous);
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(this, arguments);
        } else if (!timeout && trailing !== false) {
            timeout = setTimeout(() => {
                timeout = null;
                previous = leading === false ? 0 : +new Date();
                result = func.apply(this, arguments);
            }, remaining);
        }
        return result;
    };

    throttled.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
        previous = 0;
    };

    return throttled;
};

module.exports = throttle;
