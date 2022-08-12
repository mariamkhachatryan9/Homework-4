// Abstract classes are base classes from which other classes may be derived. In other
// words, you can’t create an instance with that class, you can only extend from it.
// Create a class, which will throw an error if you try to create an instance with it.


class Fruit {
    constructor() {
        if (this.constructor == Fruit) {
            throw new Error("Object of Abstract Class cannot be created");
        }
    }
    display() {
        throw new Error("Abstract Method has no implementation");
    }
}
class Orange extends Fruit {
    display() {
        console.log("Orange");
    }
}

let orange = new Orange();
orange.display();