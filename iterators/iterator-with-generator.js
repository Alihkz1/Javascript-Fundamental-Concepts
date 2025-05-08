const obj = {
  *[Symbol.iterator]() {
    for (let i = 0; i < 4; i++) yield i;
  },
};

for (const value of obj) console.log(value);

// syntax
// function* funcName(){} ✅
// *[](){} ✅
// *()=>{} ❌
