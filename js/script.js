// // const arr1 = [1, 2, 3, 4, 5, 6, 1, 1];
// // const arr2 = [7, 8, 9, 10];

// // const arr3 = arr2.concat(arr1);
// // const arr4 = [...arr1, ...arr2]
// // console.log(arr4);
// const people = [
//     {
//         firstName: 'Muhammadrasul',
//         interests: {
//             football: 'Football',
//             gaming: 'Fifa'
//         }
//     },
//     {
//         firstName: 'John',
//         interset: {
//             football: 'Football',
//             gaming: 'Fifa'
//         }
//     },
//     {
//         firstName: 'John',
//         interest: {
//             football: 'Game',
//             gaming: 'Fifa'
//         }
//     }
// ]

// for (const person of people) {
//     console.log(person.interests?.football);
// }

// console.log('working');


// let age = 23;
// const age1 = age;

// age = 40;
// console.log(age1);
// console.log(age);

// const person = {
//     firstName: 'Muhammadrasul'
// }

// const person1 = person;

// person.firstName = 'John';

// console.log(person);
// console.log(person1);
// console.log(age);
// let age = 23;



const form = document.querySelector('.form');
const firstName = document.querySelector('.firstName');
const btn = document.querySelector('button')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // const inputValue = firstName.value;
    // console.log(inputValue);

})

btn.addEventListener('click', () => {

    const inputValue = firstName.value;
    console.log(inputValue);
})



firstName.addEventListener('input', () => {
    const inputValue = firstName.value;
    console.log(inputValue);
})
