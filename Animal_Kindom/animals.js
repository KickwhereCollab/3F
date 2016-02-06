class Animal {
  constructor(type, noise) {
    this.type = type;
    this.noise = noise;
  }
  action() {
    alert(this.animal + "sounds like" + this.noise + "!" );
  }
}

var cat = class Cat extends Animal {

};

var dog = class Dog extends Animal {

};

var cow = class Cow extends Animal {

};

var aardvark = class Aardvark extends Animal {

};

var pangolin = class Pangolin extends Animal {

};

var wookiee = class Wookiee extends Animal {

};
