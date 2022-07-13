import { range } from "./range";

export const fold = <T>(
    array: T[],
    callback: (result: T, value: T) => T,
    initValue: T
) => {
    let result: T = initValue;
    for (let i = 0; i < array.length; ++i) {
        const value = array[i];
        result = callback(result, value);
    }
    return;
};

let numbers: number[] = range(1, 100 + 1);
let result = fold(numbers, (result, value) => result + value, 0);
console.log(result);
