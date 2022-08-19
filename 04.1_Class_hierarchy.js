// Implement the described class hierarchy: the Character class is the parent class for all
// the others. 6 child classes Bowerman, Swordsman, Magician, Daemon, Undead, and
// Zombie inherit from it, setting their own characteristics.

// 1. Properties that instances of the Character class should have:
// name - name
// type - type
// health - standard of living
// level - character level
// attack - attack
// defense - protection

// 2. The class constructor must meet the following requirements:
// name - string, min - 2 characters, max - 10
// type - one of the types (string): Bowman, Swordsman, Magician, Daemon,
// Undead, Zombie
// If incorrect values are passed, an error should be thrown

// 3. Your function should automatically set the following fields:
// health: 100
// level: 1
// Attack / Defense:
// ● Bowman: 25/25
// ● Swordsman: 40/10

// ● Magician: 10/40
// ● Undead: 25/25
// ● Zombie: 40/10
// ● Daemon: 10/40'

class Character {
    constructor(name, type, health = 100, level = 1, attack, defense) {
        if (name.length >= 2 && name.length <= 10) {
            this.name = name;
        } else {
            throw new Error("Name is not defined")
        }
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defense = defense;

    }
}

class Bowerman extends Character {
    constructor(name) {
        super(name, "Bowerman", 100, 1, 25, 25)
    }
}
class Swordsman extends Character {
    constructor(name) {
        super(name, "Swordsman", 100, 1, 40, 10)
    }
}
class Magician extends Character {
    constructor(name) {
        super(name, "Magician", 100, 1, 10, 40)
    }
}
class Daemon extends Character {
    constructor(name) {
        super(name, "Daemon", 100, 1, 10, 40)
    }
}
class Undead extends Character {
    constructor(name) {
        super(name, "Undead", 100, 1, 25, 25)
    }
}
class Zombie extends Character {
    constructor(name) {
        super(name, "Zombie", 100, 1, 40, 10)
    }
}


let z = new Zombie("aa")
console.log(z);











