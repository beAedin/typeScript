class Person1 {
    name: string;
    age?: number;
}
// 변수명: 타입
let jack1: Person1 = new Person1();
jack1.name = "Jack";
jack1.age = 32;
console.log(jack1);
