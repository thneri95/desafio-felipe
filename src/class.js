
// Challenge: Create a class called Hero that has the following properties: name, age, and type;
// The type property can be one of the following: "mage", "warrior", "monk", or "ninja";
// The class should have a method called attack() that logs a message to the console indicating the type of attack based on the hero's type;



// class Hero :
class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }
    //function attack : 
    attack() {
        let attackDescription = "";
        switch (this.type) {
            case "mage":
                attackDescription = "magic";
                break;
            case "warrior":
                attackDescription = "sword";
                break;
            case "monk":
                attackDescription = "martial arts";
                break;
            case "ninja":
                attackDescription = "shuriken";
                break;
            default:
                attackDescription = "unknown attack";
        }
        console.log(`The ${this.type} attacked using ${attackDescription}`);
    }
}



// My test cases for the Hero class:
console.log("---------\n");

console.log("Simulations for Hero class:");

console.log("--------\n");

const hero1 = new Hero("Gandalf", 2019, "mage");
hero1.attack(); // Output: The mage attacked using magic!

console.log("\n");

const hero2 = new Hero("Ragnar", 35, "warrior");
hero2.attack(); // Output: The warrior attacked using sword!

console.log("\n");

const hero3 = new Hero("Buddha", 28, "monk");
hero3.attack(); // Output: The monk attacked using martial arts!

console.log("\n");


const hero4 = new Hero("Kakashi", 30, "ninja");
hero4.attack(); // Output: The ninja attacked using shuriken!


console.log("---------\n");