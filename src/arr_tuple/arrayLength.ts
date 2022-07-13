const arrayLength = <T>(array: T[]): number => array.length;
const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0;

let numArr: number[] = [1, 2, 3];
let strArr: string[] = ["Hello", "World"];

// type IPerson = { name: string; age?: number };
let personArr: IPerson[] = [{ name: "Jack" }, { name: "Jane", age: 32 }];

console.log(
    arrayLength(numArr),
    arrayLength(strArr),
    arrayLength(personArr),
    isEmpty([]),
    isEmpty([1])
);
