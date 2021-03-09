"use strict";

function printType(arr: Array<any>): void {
    arr.forEach((value, index) => {
        if (typeof value == "number") console.log(`In position ${index} we have a ${typeof value}`)
        else if (typeof value == "string") console.log(`In position ${index} we have a ${typeof value}`)
        else if (typeof value == "boolean") console.log(`In position ${index} we have a ${typeof value}`)
        else console.log(`no value match in position ${index}`)
    });
}

let one: number = 1;
let two: string = "two";
// let twoAndAHalf: null
let three: boolean = false;

let arr: Array<any> = [one, three, two];

printType(arr);