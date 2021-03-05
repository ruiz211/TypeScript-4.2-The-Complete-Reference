"use strict";

class Person {
    private _name: string = "";

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }
}

let person: Person = new Person("Charles");
console.log(person.name);
person.name = "John";
console.log(person.name);