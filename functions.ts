function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(a: number, b: number, cb: (num: number) => void) {
    const result = add(a, b);
    cb(result);
}

printResult(add(5, 10));
console.log('XD');

let someValue: undefined;

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

console.log(combineValues(1, 5));


addAndHandle(10, 20, console.log);