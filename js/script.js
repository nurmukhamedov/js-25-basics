// const userYear = +prompt('Tugilgan yilingiz');

// if (userYear <= 2000) {
//     console.log('20 asr');
// } else {
//     console.log('21 asr');
// }


// const number1 = +prompt('Son kiriting');
// const number2 = +prompt('Yana son kiriting');
// const answer = +prompt('Javobingiz');
// const realAnswer = number1 + number2;

// if (answer === realAnswer) {
//     console.log('Javobingiz to`g`ri');
// } else {
//     console.log(`Xato aslida ${realAnswer} bo'lishi kerak edi`);
// }


// const ticketPrice = 500;
// const hotelPrice = 250;
// const entertainmentPrice = 120;

// const usdToUzs = 11000;
// const euroToUzs = 12000;

// const totalExpense = (ticketPrice * usdToUzs) + (hotelPrice * usdToUzs) + (entertainmentPrice * euroToUzs);


// const userMoney = +prompt('Qancha pulingiz bor?');

// if (userMoney >= totalExpense) {
//     console.log('Oq yo`l');
// } else {
//     console.log(`Pulingiz yetmas ekan ${totalExpense - userMoney} yana kerak`);
// }


// const x = 4;


// switch (x) {
//     case 4:
//         console.log('bu 4');
//         break;
//     case 6:
//         console.log('bu 6');
//         break;
//     case 7:
//         console.log('bu 7');
//         break
//     default:
//         console.log('Hali shartda yo`q');
//         break;
// }
/// switch case va if else da bajarasiz, userdan son so'raysiz 1 dan 7 gacha, 1 kiritsa bugun Dushanba, 2 kiritsa seshanba, bunday kun yo'q. 


// uygavazifa
// *, /, -, +
// number
//number



const age = 22;
// let check;
// if (age > 18) {
//     check = 'Siz guvohnoma olsangiz bo`ladi';
// } else {
//     check = 'mumkin emas'
// }
// console.log(check);

// const checkUser = age > 18 ? 'Siz guvohnoma olsangiz bo`ladi' : 'Mumkin emas';

// console.log(checkUser);

// const x = 18;

// function myFunction(a) {

//     if (a > 18) {
//         check = 'Siz guvohnoma olsangiz bo`ladi';
//     } else {
//         check = 'mumkin emas'
//     }
//     return check
// }

// console.log(myFunction(18));
// console.log(myFunction(20));
// console.log(myFunction(30));
// console.log(myFunction(15));

// function calcNumber(number1, number2) {
//     return number1 * number2;
// }

// console.log(calcNumber(5, 10));
// console.log(calcNumber(8, 2));
// console.log(calcNumber(105, 15));

console.log(calcAge(2000));
console.log(calcAge(1999));
console.log(calcAge(1990));

function calcAge(birthYear) {
    return 2023 - birthYear;
}

const calcNumbers = function (fruit1, fruit2) {
    return `5ta ${fruit1} va 2 ta ${fruit2}`
}

console.log(calcNumbers('olma', 'nok'));

const myArrow = (name) => {
    return `hello ${name}`
};

console.log(myArrow('John'));





