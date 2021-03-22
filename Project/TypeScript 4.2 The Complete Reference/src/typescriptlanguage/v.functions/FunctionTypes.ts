//
//  FunctionTypes.ts
//  TypeScript 4.2 The Complete Reference
//
//  Created by José Ruiz on 3/22/21.
//

type printName = (s: string) => void

function printName(name: string): void {
    console.log(name)
}

function print(p: printName): void {
    p("Charles")
}

print(printName)