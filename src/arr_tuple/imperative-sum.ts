// 명령형 프로그래밍 방식
let sum: number = 0;
for (let val = 1; val <= 100; ) sum += val++;
console.log(sum);

// 선언형 프로그래밍
const range = (from: number, to: number): number[] =>
    from < to ? [from, ...range(from + 1, to)] : [];

let nums: number[] = range(1, 100 + 1);
console.log(nums);
