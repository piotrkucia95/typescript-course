function add(num1: number, num2: number, showResult: boolean, resultPhrase: string) {
    let result = num1 + num2
    if (showResult) {
        console.log(resultPhrase + (num1 + num2));
    } else {
        return num1 + num2;
    }
}

const num1 = 6;
const num2 = 23;
const printResult = true;
const resultPhrase = 'The result is ';

const result = add(num1, num2, printResult, resultPhrase);