// Implement the levelUp method in the Character class, which works like this:
// ● Raises the level field by 1
// ● Increases attack and defense by 20%
// ● Sets health to 100
// The method should work only if the life indicator is not equal to 0. Otherwise, an error is
// generated (you cannot increase the level of the deceased).
// Implement the damage(points) method in the Character class, which changes the
// internal state of the object (points is the damage done to the character). The
// damage(points) method does not return anything and calculates the final change in the
// character's health (health) according to the formula:
// health -= points * (1 - defense / 100),
// given that the value of health >= 0.

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

    levelUp() {
        if (this.health <= 0) {
            throw new Error("Character is died");
        }
        this.level++;
        this.attack += this.attack * 0.2;
        this.defense += this.defense * 0.2;
        this.health = 100;
    }
    damage(points) {
        if (this.health <= 0) {
            throw new Error("Character is died")
        }
        this.health -= points * (1 - this.defense / 100);
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