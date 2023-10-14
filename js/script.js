// const obj = {
//     firstName: 'Muhammadrasul',
//     age: 23
// }
// const arr = [1, 2, 3, 4, 5];
// const num = 1;
// function myFun() {
//     return 'Hello world'
// }
// console.log(arr instanceof Object);

// const arr = [1, 2, 4, 5, 6, 7];
// const greatNum = Math.max(...arr);

// console.log(greatNum);

// const myName = function (name) {
//     return name
// }

// console.log(myName('Muhammadrasul'));

// function sayHello() {
//     console.log('hello');
// }
// document.querySelector('.box').addEventListener('click', sayHello)


// function myHighFunction(name) {
//     return function (age) {
//         return `Hello I am ${name} my age is ${age}`
//     }
// }

// const john = myHighFunction('John');
// const bob = myHighFunction('Bob');


// console.log(john(35));
// console.log(bob(28));


const arr = [1, 2, 4, 5, 6, 7];

// arr.forEach((num, index, array) => {
//     array[index] = num * 2;
//     console.log(array);
// });

// console.log(arr);


// const newArray = arr.map((element) => element * 2);

// console.log(arr);
// console.log(newArray);

// const string1 = 'John';
// const string2 = 'Josh';

// const result = string1.localeCompare(string2);

// console.log(result);

// const names = ['David', 'Angela', 'Bob', 'John'];

// names.sort((a, b) => b.localeCompare(a));

// console.log(names);


// const newElement = arr.findIndex((element) => element > 2);

// console.log(newElement);

// const total = arr.reduce((acc, element) => {
//     console.log(acc);
//     return acc + element

// }, 0);

// console.log(total);

// const people = [
//     {
//         name: 'David',
//         age: null
//     },
//     {
//         name: 'Bob',
//         age: 31
//     },
//     {
//         name: 'Alice',
//         age: 23
//     },
// ]


// const newPeople = people.filter((person) => person.age !== null).sort((a, b) => b.name.localeCompare(a.name))

// console.log(newPeople);

const nums = [1, 3, -6, -7, 5.8, 6.5, 8, 4.2, -3, -5, -9.8, 2.2, -3.2];

const changeArray = function (numbers) {
    const newNumbers = numbers.map((number) => {
        if (number < 0) {
            return Math.round(number) * -1
        } else {
            return Math.round(number)
        }
    });
    return newNumbers;
}

console.log(changeArray(nums));

