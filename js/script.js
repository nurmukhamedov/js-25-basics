// // const userAge = +prompt('Yoshingizni kiriting');

// // if (userAge < 18) {
// //     console.log('siz o `qishingiz kerak');
// // } else if (userAge > 18 && userAge < 60) {
// //     console.log('siz ishlashingiz kerak');
// // } else {
// //     console.log('Siz pensiyadasiz');
// // }

// // switch (true) {
// //     case (userAge < 18):
// //         console.log('Siz o`qishingiz kerak');
// //         break;
// //     case (userAge > 18 && userAge < 60):
// //         console.log('Ishlang');
// //         break;
// //     default:
// //         console.log('Siz pensiya yoshidasiz');
// //         break;
// // }



// // const userNumber = +prompt('Son kiriting');

// // if (userNumber < 0) {
// //     console.log(`Bu manfiy son ${userNumber * 2}`);
// // } else {
// //     console.log(`Bu musbat son ${userNumber * 3}`);
// // }

// // const number = +prompt('son kiriting')

// // const getNextNum = function (num) {
// //     return ++num
// // }

// // console.log(getNextNum(5));
// // console.log(getNextNum(6));
// // console.log(getNextNum(7));

// // function calculateDaysInYears(years) {

// //     const daysInNonLeapYear = 365;
// //     const daysInLeapYear = 366;
// //     const leapYears = Math.floor(years / 4);

// //     const nonLeapYears = years - leapYears;
// //     const totalDays = (leapYears * daysInLeapYear) + (nonLeapYears * daysInNonLeapYear);

// //     return totalDays;
// // }


// // const myText = document.querySelector('#description');
// // const btn = document.querySelector('.btn');

// // btn.addEventListener('click', function () {
// //     myText.textContent = 'Hello world';
// //     myText.classList.add('main-text')
// // })

// const addButton = document.querySelector('.add');
// const removeBtn = document.querySelector('.menu_item button');
// const menu = document.querySelector('.menu');
// const layer = document.querySelector('.layer');


// addButton.addEventListener('click', function () {
//     menu.classList.add('is-active');
//     layer.classList.add('is-active-layer');
//     document.body.style.overflowY = 'hidden';
// })
// removeBtn.addEventListener('click', function () {
//     menu.classList.remove('is-active');
//     layer.classList.remove('is-active-layer');
//     document.body.style.overflowY = 'scroll';
// })
// layer.addEventListener('click', function () {
//     console.log('clicked');
//     menu.classList.remove('is-active');
//     layer.classList.remove('is-active-layer');
//     document.body.style.overflowY = 'scroll';
// })



const myArray = [1, 47, 58, 6, 'John', 'Doe', 'Nicole', true, false, ['Inside', 123, false, ['hi']]];




const salaries = [125, 555, 44, 505, 700, 1000, 20];


function calcTips(num) {
    if (num > 50 && 300 > num) {
        return num * 0.3
    } else {
        return num * 0.15
    }
}


// for (let i = 0; i < salaries.length; i++) {
//     console.log(calcTips(salaries[i]));
// }

// for (const salary of salaries) {
//     console.log(calcTips(salary));
// }


const years = [1995, 1986, 2000, 2004];
// const ages = [];

// function calcAge(year) {
//     return 2023 - year
// }

// for (const year of years) {
//     const userAge = calcAge(year);
//     ages.push(userAge);
// }

// console.log(ages);


function calcAndReturnAges(years) {
    const userAges = [];
    for (const year of years) {
        let age = 2023 - year
        userAges.push(age)
    }

    return userAges;
}


console.log(calcAndReturnAges(years));






