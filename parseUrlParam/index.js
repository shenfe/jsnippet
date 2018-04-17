module.exports = (key, url) => {
    if (arguments.length === 1) {
        if (/[.\/?]/.test(key)) {
            url = key;
            key = undefined;
        }
    }
    let query;
    if (url) {
        let p = url.indexOf('?');
        if (p >= 0) {
            query = url.substr(p + 1);
            p = query.indexOf('#');
            if (p >= 0) query = query.substring(0, p);
        } else {
            query = '';
        }
    } else {
        query = window.location.search.substr(1);
    }
    let parts = query.split('&');
    let params = {};
    for (let i = 0, len = parts.length; i < len; i++) {
        if (parts[i] === '') continue;
        let pair = parts[i].split('=');
        if (pair.length === 1) {
            pair[1] = true;
        }
        pair[0] = decodeURIComponent(pair[0]);
        pair[1] = decodeURIComponent(pair[1]);
        if (pair[0] === key) {
            return pair[1];
        }
        params[pair[0]] = pair[1];
    }
    return key ? undefined : params;
};
