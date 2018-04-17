const debounce = function (func, wait, immediate) {
    let timeout;
    let result;

    const debounced = function () {
        if (timeout) clearTimeout(timeout);
        if (immediate) {
            if (!timeout) result = func.apply(this, arguments);
            timeout = setTimeout(() => timeout = null, wait);
        } else {
            timeout = setTimeout(() => {
                timeout = null;
                result = func.apply(this, arguments);
            }, wait);
        }
        return result;
    };

    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
};

module.exports = debounce;
