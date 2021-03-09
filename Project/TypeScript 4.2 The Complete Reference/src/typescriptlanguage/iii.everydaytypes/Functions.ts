"use strict";

import {numbersArray} from '../ii.basictypes/Arrays'

function greet(name: string): string {
    return `Hello, ${name}`;
}

function getRandom(): number {
    return Math.random() * 100
}

numbersArray.forEach(function (n) {
    console.log(Math.pow(n, n));
})

console.log(greet("Charles"));

console.log(getRandom().toFixed(0))