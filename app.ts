let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'XD';

if (typeof userInput == 'string') {
    userName = userInput;
}

function generateError(message: string, errorCode: number): void {
    throw {
        message: message,
        errorCode: errorCode
    }
}

generateError('An error occured', 600);