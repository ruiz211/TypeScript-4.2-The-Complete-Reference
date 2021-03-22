//
//  TruthinessNarrowing.ts
//  TypeScript 4.2 The Complete Reference
//
//  Created by José Ruiz on 3/17/21.
//

function printAll(strs: string | string[] | null) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
    } else if (typeof strs === "string") {
        console.log(strs);
    }
}

printAll("Hello");
printAll(["a", "b", "c"]);