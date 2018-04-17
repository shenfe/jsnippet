const fns = [];
const hack = document.documentElement.doScroll;

let loaded = (hack ? /^loaded|^c/ : /^loaded|c/).test(document.readyState);

function flush() {
    loaded = true;
    while (fns.length) fns.shift()();
}

if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', function handler() {
        document.removeEventListener('DOMContentLoaded', handler, false);
        flush();
    }, false);
} else if (hack) {
    document.attachEvent('onreadystatechange', function handler() {
        if (/^c/.test(document.readyState)) {
            document.detachEvent('onreadystatechange', handler);
            flush();
        }
    });
}

const ready = hack ?
    fn => {
        if (self != top) {
            loaded ? fn() : fns.push(fn);
        } else {
            try {
                hack('left');
            } catch (e) {
                return setTimeout(() => ready(fn), 50);
            }
            fn();
        }
    } :
    fn => {
        loaded ? fn() : fns.push(fn);
    }
;

module.exports = ready;
