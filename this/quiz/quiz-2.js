const obj = {
  a: 10,
  b: function () {
    console.log(this.a);
    const inner = () => {
      console.log(this.a);
    };
    inner();
  },
};

const b = obj.b;
b(); // Output? /* undefined twice */
obj.b(); // Output? /* 10 twice */
