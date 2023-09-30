// const userAge = +prompt('Yoshingizni kiriting');

// if (userAge < 18) {
//     console.log('siz o `qishingiz kerak');
// } else if (userAge > 18 && userAge < 60) {
//     console.log('siz ishlashingiz kerak');
// } else {
//     console.log('Siz pensiyadasiz');
// }

// switch (true) {
//     case (userAge < 18):
//         console.log('Siz o`qishingiz kerak');
//         break;
//     case (userAge > 18 && userAge < 60):
//         console.log('Ishlang');
//         break;
//     default:
//         console.log('Siz pensiya yoshidasiz');
//         break;
// }



// const userNumber = +prompt('Son kiriting');

// if (userNumber < 0) {
//     console.log(`Bu manfiy son ${userNumber * 2}`);
// } else {
//     console.log(`Bu musbat son ${userNumber * 3}`);
// }

// const number = +prompt('son kiriting')

// const getNextNum = function (num) {
//     return ++num
// }

// console.log(getNextNum(5));
// console.log(getNextNum(6));
// console.log(getNextNum(7));

// function calculateDaysInYears(years) {

//     const daysInNonLeapYear = 365;
//     const daysInLeapYear = 366;
//     const leapYears = Math.floor(years / 4);

//     const nonLeapYears = years - leapYears;
//     const totalDays = (leapYears * daysInLeapYear) + (nonLeapYears * daysInNonLeapYear);

//     return totalDays;
// }


// const myText = document.querySelector('#description');
// const btn = document.querySelector('.btn');

// btn.addEventListener('click', function () {
//     myText.textContent = 'Hello world';
//     myText.classList.add('main-text')
// })

const addButton = document.querySelector('.add');
const removeBtn = document.querySelector('.menu_item button');
const menu = document.querySelector('.menu');

addButton.addEventListener('click', function () {
    menu.classList.add('is-active');
})
removeBtn.addEventListener('click', function () {
    menu.classList.remove('is-active');
})







