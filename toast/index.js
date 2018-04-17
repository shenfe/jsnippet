const transformIn = 'translate3d(-50%, -50%, 0) scale(1)';
const transformOut = 'translate3d(-50%, -50%, 0) scale(0.9)';
const fadeSpeed = 0.2; // unit: second

const defaultStyle = {
    'pointer-events': 'none',
    'color': '#fff',
    'opacity': 0,
    '-webkit-transition': `all ${fadeSpeed}s ease-in-out`,
    '-moz-transition': `all ${fadeSpeed}s ease-in-out`,
    '-o-transition': `all ${fadeSpeed}s ease-in-out`,
    'transition': `all ${fadeSpeed}s ease-in-out`,
    'position': 'fixed',
    'background': 'rgba(0, 0, 0, 0.5)',
    'border-radius': '6px',
    'padding': '4px 8px',
    'top': '50%',
    'left': '50%',
    '-webkit-transform': transformOut,
    '-moz-transform': transformOut,
    '-o-transform': transformOut,
    'transform': transformOut,
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    '-o-user-select': 'none',
    'user-select': 'none',
    'z-index': 999999999,
    'display': 'inline-block',
    'max-width': '80%',
    'word-wrap': 'break-word;'
};

const objToCssText = obj => {
    const arr = [];
    for (let p in obj) {
        if (!obj.hasOwnProperty(p)) continue;
        arr.push(`${p}:${obj[p]}`);
    }
    return arr.join(';');
};

const setDomTransform = (dom, transform) => {
    dom.style.webkitTransform = transform;
    dom.style.MozTransform = transform;
    dom.style.OTransform = transform;
    dom.style.transform = transform;
};

const toast = (content, option = {}) => {
    const dom = document.createElement('span');
    dom.style.cssText = objToCssText({
        ...defaultStyle,
        ...option.style
    });
    dom.innerHTML = content;
    document.body.appendChild(dom);
    const delay = option.delay || 1000;

    setTimeout(function () {
        dom.style.pointerEvents = 'auto';
        dom.style.opacity = '1';
        setDomTransform(dom, transformIn);

        setTimeout(function () {
            dom.style.pointerEvents = 'none';
            dom.style.opacity = '0';
            setDomTransform(dom, transformOut);

            setTimeout(function () {
                option.callback && option.callback();
                document.body.removeChild(dom);
                dom = null;
            }, fadeSpeed * 1000 + 100);
        }, delay);
    }, 0);
};

module.exports = toast;
