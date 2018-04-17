module.exports = name => {
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
