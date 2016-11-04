// @flow

class Dog {
  constructor(name:string) {
    this.name = name;
  }

  bark(): string {
    return `Wah wah, I am ${this.name}`;
  }

  barkInConsole() {
    console.log(this.bark());
  }
}

export default Dog;
