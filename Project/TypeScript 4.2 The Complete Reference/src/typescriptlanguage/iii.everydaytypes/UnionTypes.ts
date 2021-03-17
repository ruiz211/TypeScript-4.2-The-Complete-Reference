//
//  UnionTypes.ts
//  TypeScript 4.2 The Complete Reference
//
//  Created by José Ruiz on 3/17/21.
//

function printID(id: number | string): void {
    if (typeof id == "string") console.log(id.toUpperCase())
    else console.log(id)
}

printID(11)
printID("id")