const box = document.querySelector('.box');
const loading = document.querySelector('.loading');
const notFoundMessage = document.querySelector('.notFoundMessage');
const form = document.querySelector('form');
const input = document.querySelector('.search');
const itemsPerPage = 100;
let currentPage = 1;
let totalItems = 0;


let newData = [];
const myData = fetch('https://jsonplaceholder.typicode.com/photos');


myData.then(function (response) {
    return response.json();
}).then(function (datas) {

    newData = datas.slice(0, 1000);
    totalItems = newData.length;

    generatePaginationLinks();
    updateCards('')
})


function updateCards(searchValue) {
    box.innerHTML = '';
    let found = false;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    console.log(startIndex);
    console.log(endIndex);
    newData.slice(startIndex, endIndex).forEach((data) => {
        console.log(data);
        const dataTitle = data.title.toLowerCase();
        const searchData = searchValue.toLowerCase();
        if (dataTitle.includes(searchData)) {
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
            found = true;
        }
    });

    window.scrollTo(0, 0)

    loading.style.display = 'none';
    if (!found) {
        notFoundMessage.style.display = 'block';
    } else {
        loading.style.display = 'none';
        notFoundMessage.style.display = 'none';
    }
}
const pagination = document.querySelector('.pagination');

function generatePaginationLinks() {
    pagination.innerHTML = '';
    const totalPage = Math.round(totalItems / itemsPerPage);

    newData.slice(0, totalPage).forEach((_, i) => {
        const pageLink = document.createElement('li');
        pageLink.textContent = i + 1;

        pagination.appendChild(pageLink);

        pageLink.addEventListener('click', () => {
            console.log('clicked');
            currentPage = i + 1;
            updateCards('');
            updatePaginationLink();
        })

    })

}

function updatePaginationLink() {
    const pageLinks = pagination.querySelectorAll('li');

}

input.addEventListener('input', () => {
    const searchValue = input.value.trim();
    updateCards(searchValue);
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


