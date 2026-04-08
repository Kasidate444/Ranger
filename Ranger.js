export default class Ranger {
  constructor(name, color, animalSpirit) {
    this.name = name;
    this.color = color;
    this.animalSpirit = animalSpirit;
    this.hp = 100;
    this.isTransformed = false;
  }

  transform() {
    this.isTransformed = true;
    console.log(`${this.name} transforms! Gao Access!! `);
  }

  
  rollCall() {
    console.log(`I am the ${this.color} warrior!`);
  }

  eat() {
    this.hp += 20;
    console.log(`${this.name} eats. HP: ${this.hp}`);
  }
}
