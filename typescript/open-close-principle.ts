class Animal {
  name: string;

  attack() {
    console.log(this.name, 'Attack!!');
  };
}

class Dog extends Animal{
  constructor() {
    super();
    this.name = 'Dog';
  }

  attack() {
    return new Promise((resolve, reject) => {
      super.attack();
      resolve(true);
    })
  }
}

class Bird extends Animal{
  constructor() {
    super();
    this.name = 'Bird';
  }

  attack() {
    super.attack();
  }
}

class AnimalAttacker {
  animal: Animal;
  
  constructor(animal: Animal) {
    this.animal = animal;
  }

  attack() {
    this.animal.attack();
  }
}

const dog = new Dog();
const bird = new Bird();

const dogAttacker = new AnimalAttacker(dog);
const birdAttacker = new AnimalAttacker(bird);

dogAttacker.attack();
birdAttacker.attack();
