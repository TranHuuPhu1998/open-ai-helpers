interface HelperFunction<T> {
    (element: T, index: number, array: T[]): boolean;
}
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
export declare function HelpersAll<T>(arr: T[], fn?: HelperFunction<T>): boolean;
export {};
