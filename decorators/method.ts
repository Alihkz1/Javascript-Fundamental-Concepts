// function LogMethod(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   const original = descriptor.value;
//   descriptor.value = function (...args: any[]) {
//     return original.apply(this, args);
//   };
// }

// class Calculator {
//   @LogMethod
//   plus(a: number, b: number) {
//     return a + b;
//   }
// }
