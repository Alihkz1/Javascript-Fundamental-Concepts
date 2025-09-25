let a = 10
let b = a
b = b + 2

console.log(a);
console.log(b);

const p1 = {
    name: "ali",
    ex: {
        name: 'pari',
        age: 20
    }
}

const p2 = p1
p2.name = 'kaveh'
p2.ex.age = 54

console.log(p1); // ex.age = 54
console.log(p2);
