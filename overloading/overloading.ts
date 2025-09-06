function concat(a: number, b: number): number;
function concat(a: string, b: string): string;

function concat(a: any, b: any): any {
  return a + b;
}

console.log(concat(1, 2));
console.log(concat("Hi", "Ali"));


// function greet(name: string): string;
// function greet(): string;
// function greet(name?: string): string {
//   if (name) {
//     return `Hello, ${name}!`;
//   }
//   return "Hello!";
// }

// console.log(greet());        // "Hello!"
// console.log(greet("Ali"));

// TypeScript allows compile-time function overloading via multiple signatures.
// Runtime sees only one implementation function.
// Helps create flexible APIs with proper type checking.