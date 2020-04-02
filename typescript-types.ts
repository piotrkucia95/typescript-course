enum Role {ADMIN, READ_ONLY, AUTHOR};

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
//     role2: enum;
// } = {
    
const person = {
    name: 'Piotr',
    age: 25,
    hobbies: ['sports', 'cooking'],
    role: [2, 'author'],
    role1: Role.ADMIN
};

let favouriteSports: string[];
favouriteSports = ['XD'];

console.log(person);