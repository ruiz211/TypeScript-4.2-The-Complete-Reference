"use strict";

interface Point {
    x: number
    y: number
}

function printPoint(p: Point): void {
    console.log(`Coordinates x: ${p.x}, y: ${p.y}`)
}

let p: Point = {x: 11, y: 37}
printPoint(p);