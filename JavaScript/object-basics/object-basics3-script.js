const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};

const cat2 = {
  name: "Bernie",
  breed: "Persian",
  color: "yellow",
  greeting() {
    console.log(`Hello, said ${this.name} the ${this.breed}.`);
  },
};
