// const arr = [1, 2, 3, 4, 5, 6, 7, 8, undefined, false, 9, 10, '1'];

// function calcSumOfNum(numbers) {
//     let total = 0;

//     for (const num of numbers) {
//         if (typeof num !== 'string' && typeof num !== 'undefined' && typeof num !== 'boolean') {
//             total += num
//         }
//     }

//     return total
// }

// console.log(calcSumOfNum(arr));


// const names = ['John', 'Bob', 'Peter', 'Nicole'];

// function convertStrings(array, letterType) {
//     const newArray = [];
//     for (const name of array) {
//         if (letterType === 'uppercase') {
//             const newName = name.toUpperCase();
//             newArray.push(newName);
//         } else if (letterType === 'lowercase') {
//             const newName = name.toLowerCase();
//             newArray.push(newName);
//         }
//     }
//     return newArray;
// }

// console.log(convertStrings(names, 'lowercase'));
// console.log(convertStrings(names, 'uppercase'));


// function multiply(a, b) {
//     return a * b
// }
// 3 xil scope global, local (function), block


// console.log(firstName);
// var firstName = 'Muhammadrasul';


const myArray = [1, 'hi', 5, 'world', false];
const job = 'Developer World';
const newString = myArray.join(' ');

const newArray = job.split();
console.log(newArray);


// const numbers = [1, 2, 3, 4, 5];

// const exampleWord = 'Hello world';

// console.log(numbers.reverse());


// function convertToString(word) {
//     // salom
//     // hary
//     // ['h', 'a',]
//     const newWord = word.split('').reverse().join('');
//     return newWord
// }

// console.log(convertToString('salom'));
// console.log(convertToString('hayr'));



const array = ['Bob', 'John', 'Steve'];

const bob = {
    age: 34,
    "job": 'Developer',
    isMarried: true,
    children: {
        first: 'Alive',
        second: 'Nicole'
    }
}


const students = [
    {
        firstName: 'Sardor',
        age: 17
    },
    {
        firstName: 'Javoxir',
        age: 16
    },
    {
        firstName: 'Jo`rabek',
        age: 22
    }
]

console.log(students[0]["firstName"]);

console.log(array[1]);
console.log(bob.job);

