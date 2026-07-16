"use strict";
// Classes and Objects
// Class definition
// Constructor
// Access Modifiers 
// Optional Properties
// Parameter Properties
// Getter and Setter
// Static members
// Abstract Classes and methods
// Class: class is a blueprint for creating objects. It encapsulates data for the object and methods to manipulate that data.
class BottleMaker {
    name;
    litre;
    material;
    constructor(name, litre, material) {
        this.name = name;
        this.litre = litre;
        this.material = material;
        // this.name = name;
        // this.litre = litre;
        // this.material = material;
    }
}
let bot1 = new BottleMaker("Milton", 1000, "Plastic");
