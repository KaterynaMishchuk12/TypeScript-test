import { concatenation } from "./concatenation";
const button = document.querySelector("button");
const input = document.querySelector("input");
if (button && input) {
    button.addEventListener("click", () => {
        concatenation(input.value, "hello");
    });
}
// type User = {
//   name: string;
//   age: number | string;
// };
// type size = "small" | "medium" | "large";
// let total: number = 100;
// let title: string = "Bob";
// const isActive: boolean = false;
// let empty: null = null;
// let undf: undefined = undefined;
// let age = 10;
// const numbers: number[] = [1, 2, 3, 4, 5, 6, 3, 0];
// numbers.push(12);
// // const user: { name: string; age: number } = {
// //   name: "Bob",
// //   age: 12,
// // };
// const user: User = {
//   name: "Bob",
//   age: 12,
// };
// user.age = "7";
//# sourceMappingURL=index.js.map