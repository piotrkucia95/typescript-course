type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-string';

function combine(
    n1: Combinable, 
    n2: Combinable, 
    resultConversion: ConversionDescriptor
) {
    let result;
    if (typeof n1 == 'number' && typeof n2 == 'number' || resultConversion === 'as-number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return result;
}

const combinedAges = combine(25, 24, 'as-number');
const combinedStringAges = combine('30', '19', 'as-number');
const combinedNames = combine('Piotr', 'XD', 'as-string');

console.log(combinedAges);
console.log(combinedStringAges);
console.log(combinedNames);