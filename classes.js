class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  
  const halley = new Dog("Halley");
  console.log(halley.name); // print name of new const
  console.log(halley.behavior); // print behavior pattern
  halley.incrementBehavior();// add one to behavior
  console.log(halley.name);
  console.log(halley.behavior);
  