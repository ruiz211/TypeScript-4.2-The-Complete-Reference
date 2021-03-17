//
//  nullType.ts
//  TypeScript 4.2 The Complete Reference
//
//  Created by José Ruiz on 3/17/21.
//

function doSomething(x: string | undefined) {
    if (x === undefined) {
        console.log("No data")
    } else {
        console.log("Hello, " + x.toUpperCase());
    }
}

doSomething("Charles")