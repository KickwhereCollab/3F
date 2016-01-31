class Animal {
  constructor(type, noise) {
    this.type = type;
    this.noise = noise;
  }
  action() {
    alert(this.animal + " is a/an " + this.type + " that " + this.noise + "!" );
  }
}

var cat = class Cat extends Animal {
  action() {

  }
};
