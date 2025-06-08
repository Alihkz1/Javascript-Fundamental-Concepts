function meow() {
  console.log(arguments);
}
meow2 = (...args) => {
  console.log(args);
};

meow(2, 3);
meow2(5, 4);
