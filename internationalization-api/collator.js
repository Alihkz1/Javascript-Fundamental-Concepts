const collator = Intl.Collator().compare;
console.log(["a", "A", "z", "Z"].sort(collator));

const filenameOrder = new Intl.Collator(undefined, { numeric: true }).compare;
console.log(["page19", "page10"].sort(collator));
