function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {
        return new Array(padding + 1).join("No") + input;
    }
    return padding + input;
}

function multiplyAll(values: number[] | undefined, factor: number) {
    if (!values) return values
    else return values.map(value => value * factor)
}

console.log(multiplyAll([1, 2, 3, 4, 5, 6, 7, 8, 9], 2))