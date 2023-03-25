"use strict";
// This code defines an interface HelperFunction with a generic type T, which is a function that takes in an element of type T, 
// an index of type number, and an array of type T and returns a boolean value.
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelpersAll = void 0;
/**
 * A function that checks if every element in an array satisfies a given condition.
 *
 * @param arr An array of elements of type T.
 * @param fn (Optional) A callback function that takes in an element of type T,
 *           its index in the array, and the entire array as parameters, and returns a boolean value indicating whether the element satisfies a condition.
 *           If this parameter is not provided, the function simply returns true.
 *
 * @returns A boolean value indicating whether every element in the input array satisfies the condition specified by the HelperFunction,
 *          or true if the HelperFunction is not specified.
 * @throws An error if the input array is not valid (i.e., not an object or not an array).
 */
function HelpersAll(arr, fn) {
    if (typeof arr !== 'object' || !Array.isArray(arr) || arr.length <= 0) {
        throw new Error('Array not Unknown');
    }
    if (fn) {
        return arr.every(fn);
    }
    return true;
}
exports.HelpersAll = HelpersAll;
//# sourceMappingURL=helper-all.js.map