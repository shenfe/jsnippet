const isBoolean = function (v) {
    return typeof v === 'boolean';
};

const isNumber = function (v) {
    return typeof v === 'number';
};

const isNumeric = function (v) {
    const n = parseInt(v);
    if (isNaN(n)) return false;
    return (typeof v === 'number' || typeof v === 'string') && n == v;
};

const isString = function (v) {
    return typeof v === 'string';
};

const isFunction = function (v) {
    return typeof v === 'function';
};

const isObject = function (v) {
    return v != null && !(v instanceof Array) && Object.prototype.toString.call(v) === '[object Object]';
};

const isArray = function (v) {
    return Object.prototype.toString.call(v) === '[object Array]';
};

const isArrayLike = function (v) {
    return (v instanceof Array) || (v && (typeof v.length === 'number'));
};

const isBasic = function (v) {
    return v == null
        || typeof v === 'boolean'
        || typeof v === 'number'
        || typeof v === 'string'
        || typeof v === 'function';
};

module.exports = {
    boolean: isBoolean,
    number: isNumber,
    numeric: isNumeric,
    string: isString,
    function: isFunction,
    object: isObject,
    array: isArray,
    arrayLike: isArrayLike,
    basic: isBasic
};
