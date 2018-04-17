module.exports = function (url, callback) {
    let script = document.createElement('script');
    script.type = 'text/javascript';

    let cb = function () {
        callback && callback();
        script.onload = script.onreadystatechange = null;
        if (script.parentNode) {
            script.parentNode.removeChild(script);
        }
        script = null;
    };

    if (script.readyState) { // IE
        script.onreadystatechange = function () {
            if (/loaded|complete/.test(script.readyState)) {
                cb();
            }
        };
    } else {
        script.onload = function () {
            cb();
        };
    }

    script.src = url;
    document.body.appendChild(script);
};
