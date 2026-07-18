// abstract classes are classes that cannot be instantiated directly. They are meant to be extended by other classes. Abstract classes can contain abstract methods, which are methods that do not have an implementation and must be implemented by subclasses.

abstract class Animal {
    abstract makeSound(): void; // Abstract method 
    constructor(public name: string) {}
}

