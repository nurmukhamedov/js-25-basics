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


//         deleteButton.addEventListener('click', () => {
//             storedNames.splice(index, 1);
//             localStorage.setItem('info', JSON.stringify(storedNames));
//             renderList();
//         })

//         list.appendChild(wrapper);
//     })

// }

// renderList();


// Event Delegation


// const menu = document.querySelector('.menu');

// menu.addEventListener('click', (event) => {
//     if (event.target.tagName == 'LI') {
//         console.log(`${event.target.textContent} clicked`);
//     }
// })

// (function () {
//     var firstName = "Danny";

// })()
// console.log(firstName);


// import { helloWorld, multiply } from "./custom.js";

// console.log(multiply(4, 5));
// console.log(multiply(10, 20));
// console.log(multiply(38, 21));


// const box = document.querySelector('.box');
// const block = document.querySelector('.block');
// const boxAttr = box.hasAttribute('id');
// const blockAttr = block.hasAttribute('id');
// console.log(boxAttr);
// console.log(blockAttr);

// const buttons = document.querySelectorAll('button');

// buttons.forEach((button) => {
//     button.setAttribute('type', 'submit')
//     if (button.hasAttribute('disabled')) {
//         button.style.display = 'none';
//     }
// })


const box = document.querySelector('.box');

// console.log(box.dataset.myname);

// const myFragment = new DocumentFragment();

// const p = document.createElement('p');

// p.textContent = 'Test';

// const h2 = document.createElement('h2');
// h2.textContent = 'Hello world';

// myFragment.appendChild(h2);
// myFragment.appendChild(p);

// box.appendChild(myFragment);



const form = document.querySelector('form');

form.addEventListener('submit', (event) => {

    event.preventDefault();
    const name = document.querySelector('.name').value;
    const lastName = document.querySelector('.lastName').value;
    const errorName = document.querySelector('.error_name');
    const errorLastName = document.querySelector('.error_lastname');

    if (name.trim() == '' && lastName.trim() == '') {
        errorName.textContent = 'ism yozish shart';
        errorName.classList.add('error');
        errorLastName.textContent = 'Familiya yozish shart';
        errorLastName.classList.add('error');

    } else {
        errorName.textContent = '';
        errorName.classList.remove('error');
        errorLastName.textContent = '';
        errorLastName.classList.remove('error');
    }

    form.reset();

})