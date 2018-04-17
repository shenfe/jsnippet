let singleStyleTag;

const getStyleTag = () => {
    if (singleStyleTag) return singleStyleTag;

    const styleTags = document.getElementsByTagName('style');
    singleStyleTag = styleTags[styleTags.length - 1];

    if (!singleStyleTag) {
        const headTag = document.head || document.getElementsByTagName('head')[0];
        singleStyleTag = document.createElement('style');
        singleStyleTag.setAttribute('type', 'text/css');
        headTag.appendChild(singleStyleTag);
    }

    return singleStyleTag;
};

const records = {};

const addStyle = (selector, style = '', options = {}) => {
    if (!selector) return;
    if (typeof style !== 'string') {
        if (Object.prototype.toString.call(style) !== '[object Object]') return;
        let s = '';
        for (let p in style) {
            if (!style.hasOwnProperty(p)) continue;
            s += `${p}:${style[p]};`;
        }
        style = s;
    }
    if (typeof options === 'boolean') {
        options = {
            norepeat: options
        };
    }

    if (options.norepeat) {
        if (records[selector] && records[selector][style]) return;
    }
    if (!records[selector]) records[selector] = {};
    records[selector][style] = true;

    getStyleTag().appendChild(document.createTextNode(`${selector}{${style}}`));
};

module.exports = addStyle;
