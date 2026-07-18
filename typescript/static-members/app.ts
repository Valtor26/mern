// Static members are properties and methods that belong to the class itself, rather than to instances of the class. They can be accessed without creating an instance of the class.    

// for example, in the following code, we have a class called `MathUtils` that has a static method called `add`. This method can be called directly on the class without creating an instance of it.

class MathUtils {
    static add(a: number, b: number): number {
        return a + b;
    }
}

// We can call the static method like this:
const sum = MathUtils.add(5, 10);
console.log(sum); // Output: 15 

