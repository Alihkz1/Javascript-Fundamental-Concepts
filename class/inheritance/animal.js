class Animal {
  constructor(specie) {
    this.specie = specie;
  }
}

class Cat extends Animal {
  constructor() {
    super("cat");
  }
}

class PersianCat extends Cat {
  constructor() {
    super();
  }
}

const persianCat = new PersianCat();
console.log(persianCat.specie);
console.log(persianCat instanceof Animal);
