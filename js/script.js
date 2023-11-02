// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const boxContent = document.querySelectorAll('.box h3');


// const calcDistance = function (userDistance) {
//     const walkingSpeed = 3.6;
//     const bikingSpeed = 20.1;
//     const carSpeed = 70;
//     const planeSpeed = 800;

//     const walkingTime = (userDistance / walkingSpeed).toFixed(2);
//     const bikingTime = (userDistance / bikingSpeed).toFixed(2);
//     const carTime = (userDistance / carSpeed).toFixed(2);
//     const planeTime = (userDistance / planeSpeed).toFixed(2);

//     return {
//         walking: walkingTime,
//         biking: bikingTime,
//         car: carTime,
//         plane: planeTime
//     }
// }

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const distance = input.value.trim();
//     const travel = calcDistance(distance);
//     boxContent[0].textContent = travel.walking;
//     boxContent[1].textContent = travel.biking;
//     boxContent[2].textContent = travel.car;
//     boxContent[3].textContent = travel.plane;
//     form.reset();
// });





// const multiply = function (number) {
//     return function (number2) {
//         return number * number2
//     }
// }

// const multiply1 = multiply(2);

// console.log(multiply1(5));
// console.log(multiply1(7));


// const sayHello = function (name, callback) {
//     const age = 23;
//     console.log(`Hello I'm ${name}`);
//     callback(name, age);
// }

// const bye = (param, age) => {
//     console.log(`Good Bye ${param}, I'm ${age} years old`);
// };

// sayHello('Muhammadrasul', bye);



const box = document.querySelector('.box');

const myData = fetch('https://jsonplaceholder.typicode.com/photos');

myData.then(function (response) {
    return response.json();
}).then(function (datas) {
    const cutData = datas.slice(0, 100);
    cutData.forEach((data) => {
        console.log(data);
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('main-box')
        const image = document.createElement('img');
        image.src = data.thumbnailUrl;
        image.alt = data.title;
        mainDiv.appendChild(image);
        const id = document.createElement('h3');
        id.textContent = data.id;
        mainDiv.appendChild(id);

        const title = document.createElement('h2');
        title.textContent = data.title;
        mainDiv.appendChild(title);
        box.appendChild(mainDiv);

    })
})









// const box = document.querySelector('.box');
// const countries = fetch('https://restcountries.com/v3.1/all');


// countries.then((response) => response.json()).then((countries) => {
//     countries.forEach((country) => {
//         const image = document.createElement('img');
//         image.src = country.flags.png;
//         box.appendChild(image)

//         console.log(country);
//     })
// }).catch((error) => console.log(error))


