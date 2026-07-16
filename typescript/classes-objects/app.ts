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
    constructor(public name: string, public litre: number, public material: string){
        // this.name = name;
        // this.litre = litre;
        // this.material = material;
    }
}

let bot1 = new BottleMaker("Milton",1000,"Plastic");

//------------------------------------------------------------------>

// this keyword: this keyword is used to refer to the current instance of the class. It is used to access properties and methods of the class.
