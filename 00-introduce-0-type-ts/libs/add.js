"use strict";
/**
 * 数字相加
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw TypeError('error');
    }
    return a + b;
}
