class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Glad to see ya ${this.name} !`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old!`;
    }
}

class Student extends Person {
    constructor(name,age,major) {
        super(name,age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        if ( this.hasMajor()) {
            description += `His major is ${this.major}`;
        }
        return description;
    }
    
}

class Traveler extends Person {
    constructor(name,age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greet = super.getGreeting();
        
        if ( this.hasHomeLocation()) {
            greet += `I'm visiting from ${this.homeLocation}`;
        }

        return greet;
    }

}

const me = new Student();
console.log(me.getDescription());

const Joshya = new Student('Andew Paul', 99, 'Season');
console.log(Joshya.getDescription());

const Paul = new Traveler('Paul Maksakov', 23, 'Saint-Petersburg');
console.log(Paul.getGreeting());

const Laperson = new Traveler();
console.log(Laperson.getGreeting());