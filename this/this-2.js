const personObject = {
  name: "NormalPerson",
  regularFunction: function () {
    console.log(this.name); /* this = personObject */
  },
  arrowFunction: () => {
    console.log(this.name); /* this = window/globalThis */
  },
};

personObject.regularFunction()
personObject.arrowFunction()
