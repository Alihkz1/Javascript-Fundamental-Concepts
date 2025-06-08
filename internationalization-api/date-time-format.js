let d = Date.now();
let en = Intl.DateTimeFormat("en-US").format(d);

let options = { weekday: "long", month: "long", year: "numeric", day: "numeric" };
let fr = Intl.DateTimeFormat("fr-FR", options).format(d);

console.log(en);
console.log(fr);
