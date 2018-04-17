const ajax = function (option = {}, onSuccess, onError) {
    if (!option.data) {
        option.data = {};
    }
    if (!option.method) {
        option.method = option.type || 'get';
    } else {
        option.method = String(option.method).toLowerCase() === 'post' ? 'post' : 'get';
    }
    if (!onSuccess) onSuccess = option.success;
    if (!onError) onError = option.error;

    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                let data = xhr.responseText;
                try {
                    data = JSON.parse(data);
                } catch (e) {}
                onSuccess && onSuccess(data);
            } else {
                onError && onError(xhr);
            }
        }
    }

    if (option.withCredentials) {
        xhr.withCredentials = true;
    }

    if (option.method === 'post') {
        xhr.open(option.method, option.url, true);
        if (option.contentType && /json/.test(option.contentType)) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(option.data));
        } else {
            const formData = new FormData();
            for (let p in option.data) {
                if (!option.data.hasOwnProperty(p)) continue;
                formData.append(p, option.data[p]);
            }
            xhr.send(formData);
        }
    } else {
        const queryData = [];
        if (!option.cache) {
            queryData.push('_' + '=' + (+new Date()) + '_' + String(Math.random()).substr(2, 4));
        }
        for (let p in option.data) {
            if (!option.data.hasOwnProperty(p)) continue;
            queryData.push(encodeURIComponent(p) + '=' + encodeURIComponent(option.data[p]));
        }
        xhr.open(option.method, option.url + (queryData.length ? ('?' + queryData.join('&')) : ''), true);
        xhr.send();
    }
};

module.exports = ajax;
