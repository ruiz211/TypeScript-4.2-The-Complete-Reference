"use strict";

class Person {
    private readonly _name: string = "";

    constructor(name: string) {
        this._name = name;
    }

    get name(): string {
        return this._name.toUpperCase();
    }
}

let person: Person = new Person("Charles");
console.log(person.name)