module.exports = function (formatString = 'yyyy年m月d日 H:MM:ss', timestamp) {
    timestamp = timestamp || +new Date();
    if (typeof timestamp === 'string') {
        if (/^\d{13}$/.test(timestamp)) {
            timestamp = parseInt(timestamp);
        }
    }
    const date = new Date(timestamp);

    const full = n => {
        if (isNaN(n)) return '';
        return n < 10 ? ('0' + n) : String(n);
    };

    let re = formatString;

    let valid = true;

    const yyyy = date.getFullYear();
    if (isNaN(yyyy)) valid = false;
    const yy = String(yyyy).substr(String(yyyy).length - 2);
    const m = date.getMonth() + 1;
    const mm = full(m);
    const d = date.getDate();
    const dd = full(d);
    const H = date.getHours();
    const t = H < 12;
    const h = !t ? (H - 12) : H;
    const HH = full(H);
    const hh = full(h);
    const M = date.getMinutes();
    const MM = full(M);
    const s = date.getSeconds();
    const ss = full(s);

    const kv = valid ? { yyyy, yy, mm, m, dd, d, HH, H, hh, h, MM, M, ss, s } : {};

    for (let k in kv) {
        if (!kv.hasOwnProperty(k)) continue;
        re = re.replace(new RegExp(k), kv[k]);
    }

    if (valid) kv.t = t;

    kv.format = formatString;
    kv.result = valid ? re : '';
    kv.toString = function () {
        return this.result;
    };
    return kv;
};
