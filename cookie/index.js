const getCookie = name => {
    const list = document.cookie.split(';');
    const obj = {};
    for (let item of list) {
        const kv = item.split('=');
        const k = decodeURIComponent(kv[0].trim());
        const v = decodeURIComponent(kv[1] || '');
        if (name && (k === name)) {
            return v;
        }
        obj[k] = v;
    }
    return name ? '' : obj;
};

const setCookie = (name, value, options = {}) => {
    let re = encodeURIComponent(name) + '=' + encodeURIComponent(value);

    if (options instanceof Date) {
        options = {
            expires: options
        };
    }

    if (options.expires) {
        re += '; expires=' + options.expires.toGMTString();
    }
    if (options.path) {
        re += '; path=' + options.path;
    }
    if (options.domain) {
        re += '; domain=' + options.domain;
    }
    if (options.secure) {
        re += '; secure';
    }

    document.cookie = re;
};

const removeCookie = (name, options = {}) => {
    options.expires = new Date();
    setCookie(name, '', options);
};

module.exports = {
    get: getCookie,
    set: setCookie,
    remove: removeCookie
};
