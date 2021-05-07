class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    quickFacts() {
        console.log(`${name} educates ${numberOfStudents} students at the ${level} school level`)
    }
    static pickSubstituteTeacher(substituteTeachers) {
        substituteTeachers = [];
        return substituteTeachers[Math.floor(substituteTeachers.length * Math.random())];
    }
    set numberOfStudents(value) {
        if (typeof value === number) {
            this._numberOfStudents = value;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
}
class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickUpPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }
    get pickUpPolicy() {
        return this._pickUpPolicy;
    }
}
class HighSchool extends School {
    constructor(name, numberOfStudents, sportTeams) {
        super(name, 'high school', numberOfStudents);
        this._sportTeams = sportTeams;
    }
    get sportTeams() {
        console.log(this._sportTeams);
    }
}

const school1 = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

school1.quickFacts;
const sub = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const school2 = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(school2.sportTeams);

