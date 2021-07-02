const isObject = value => value != null && (typeof value === 'object' || typeof value === 'function');

const isUndefined = value => value === undefined;

export { isObject, isUndefined };
