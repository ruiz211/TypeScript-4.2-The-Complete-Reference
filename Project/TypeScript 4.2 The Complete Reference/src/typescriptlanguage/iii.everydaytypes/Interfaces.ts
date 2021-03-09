"use strict";

interface Point2 {
    x: number
    y: number
}

function printPoint2(p: Point2): void {
    console.log(`Coordinates x: ${p.x}, y: ${p.y}`)
}

let p2: Point2 = {x: 11, y: 37}
printPoint2(p2);