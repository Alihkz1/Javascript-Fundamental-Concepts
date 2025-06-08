let euros_es = Intl.NumberFormat("es", { style: "currency", currency: "EUR" });
let euros_en = Intl.NumberFormat("en", { style: "currency", currency: "USD" });
console.log(euros_es.format(1000));
console.log(euros_en.format(1000));

let data = [0.05, 0.75, 20];
let percentFormat = Intl.NumberFormat("en", {
  style: "percent",
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
}).format;
console.log(data.map(percentFormat));

let arabic = Intl.NumberFormat("ar", { useGrouping: false }).format;
console.log(arabic(122223354));
