// Task1

// let sumoFNumbers = 0;
// let count = 0;

// while (count < 5) {
//     let userInput = prompt('Son kiriting');

//     if (userInput === "" || userInput === null) {
//         console.log('Xato');
//     } else {
//         let number = parseInt(userInput);
//         if (!isNaN(number)) {
//             sumoFNumbers += number;
//             count++;
//         } else {
//             console.log('Xato');
//         }
//     }
// }

// console.log(sumoFNumbers);


// const arrayNumbers = [1, 2, 3, 4, 5];

// function divideNumbers(array) {
//     let evenSum = 0;
//     let oddSum = 0;

//     for (const number of array) {
//         if (number % 2 === 0) {
//             evenSum += number
//         } else {
//             oddSum += number
//         }
//     }
//     const newArray = [evenSum, oddSum]
//     return newArray;
// }

// console.log(divideNumbers(arrayNumbers));



// const numbers = [-4, 0, 4, 12];
// const numbers2 = [-6, 0, 27, 7];


// const findMissingNumber = function (nums) {

//     const minValue = Math.min(...nums);
//     const maxValue = Math.max(...nums);
//     const newArray = []
//     for (let i = minValue; i <= maxValue; i++) {
//         newArray.push(i)
//     }
//     const missingNumbers = newArray.filter((element) => !nums.includes(element));

//     return missingNumbers;
// }
// console.log(findMissingNumber(numbers));
// console.log(findMissingNumber(numbers2));
// findMissingNumber(numbers2);


// const listItems = document.querySelectorAll('.menu li');

// listItems.forEach((item, index) => {
//     const span = item.querySelector('span');

//     item.addEventListener('click', () => {
//         span.textContent = `${index} hello world`
//         console.log(`${index} item is clicked`);
//     })
// })

// const ntStudents = [
//     {
//         firstName: 'John',
//         lastName: 'Doe',
//         age: 18
//     },
//     {
//         firstName: 'Ali',
//         age: 20
//     }
// ]
// const ntStudentinJson = JSON.stringify(ntStudents);

// localStorage.setItem('student', ntStudentinJson);

// const studentsInfo = JSON.parse(localStorage.getItem('student'))

// console.log(studentsInfo);


// const student = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 18
// }

// const checkObj = student.hasOwnProperty('interests');
// console.log(checkObj);

// const secondDiv = document.querySelector('.second'),
//     firstDiv = secondDiv.closest('.box');
// console.log(firstDiv);


// const form = document.querySelector('form'),
//     userName = document.getElementById('name'),
//     list = document.querySelector('.list'),
//     storedNames = JSON.parse(localStorage.getItem('info')) || [];


// form.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const name = userName.value.trim();

//     const students = {
//         name: name
//     };

//     if (name !== "") {
//         storedNames.unshift(students);
//         localStorage.setItem('info', JSON.stringify(storedNames))
//     }
//     form.reset();
//     renderList()
// });

// function renderList() {
//     list.innerHTML = '';

//     storedNames.forEach((name, index) => {
//         const wrapper = document.createElement('div');
//         wrapper.classList.add('wrapper');
//         const h4 = document.createElement('h4');
//         h4.textContent = name.name;

//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';

//         wrapper.appendChild(h4);
//         wrapper.appendChild(deleteButton);

//         list.appendChild(wrapper);
//     })

// }

// renderList();