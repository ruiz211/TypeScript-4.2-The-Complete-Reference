let n: number = 11
let s: string = "Charles"
let b: boolean = true

let array: Array<any> = [n, s, b];
array.forEach((value, index) => console.log(value));

export {array as numbersArray};