// Let's imagine that we have the following classes
// ● City
// ● Building
// ● Hospital
// ● PoliceDepartment
// ● Car
// ● PoliceCar
// ● AmbulanceCar
// Please decide on the inheritance hierarchy.
// You have to decide which class will be a parent class and which should
// be a child class by correctly extending classes from each other.

// Also please implement the following conditions.
// Condition 1.
// The City has many buildings. It may be an array property of the City class named
// buildings. It can include different Objects of the Building type

// Condition 2.
// Is similar to Condition 1. Buildings can have many cars.
// For example, a Hospital may have 10 AmbulanceCars or a police department may
// have police cars.


class City {
    constructor(buildings = []) {
        this.buildings = buildings;
    }

}

class Building {
    constructor(cars = []) {
        this.cars = cars;
    }
}
class Car {

}
class PoliceCar extends Car {

}
class AmbulanceCar extends Car {

}
class Hospital extends Building {

}
class PoliceDepartment extends Building {

}


const nairiHospital = new Hospital();
console.log(nairiHospital);
const erebuniHospital = new Hospital();
console.log(erebuniHospital);
const centralPoliceDepartment = new PoliceDepartment()
console.log(centralPoliceDepartment);
City.buildings = [nairiHospital, erebuniHospital,
    centralPoliceDepartment]
console.log(City.buildings)
