const countryUrl = 'https://restcountries.com/v3.1/all';

const searchInput = document.getElementById('searchInput');
const form = document.getElementById('form');
const countryWrapper = document.getElementById('countryContainer');


async function getData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchValue = searchInput.value.trim().toLowerCase();
    const countries = await getData(`https://restcountries.com/v3.1/name/${searchValue}`)

    renderCountry(countries);

    form.reset()
});

function renderCountry(countriesData) {
    console.log(countriesData);
    countryWrapper.innerHTML = '';
    countriesData.forEach((country) => {
        const { name, flags } = country;
        const fragment = new DocumentFragment;
        const countryCard = document.createElement('div');
        countryCard.classList.add('card');
        const image = document.createElement('img');
        image.src = flags.png;
        image.alt = flags.alt;
        countryCard.appendChild(image);
        const countryName = document.createElement('h3');
        countryName.textContent = name.common;
        countryCard.appendChild(countryName);
        fragment.appendChild(countryCard);
        countryWrapper.appendChild(fragment);
    })
}
getData('https://restcountries.com/v3.1/all').then((data) => renderCountry(data));

const GITHUBAPIURL = 'https://api.github.com/users';

const data = fetch(GITHUBAPIURL, {
    method: 'GET',
    headers: {
        'Authorization': `token ${token}`,
        'X-GitHub-Api-Version': '2022-11-28'
    }
})

console.log(data);