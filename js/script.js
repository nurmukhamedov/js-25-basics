
// const searchInput = document.getElementById('searchInput');
// const form = document.getElementById('form');
// const usersWRapper = document.getElementById('countryContainer');


// const options = {
//     method: 'GET',
//     headers: {
//         'Authorization': `token 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`,
//         'X-GitHub-Api-Version': '2022-11-28'
//     }
// }

// async function getData(url) {
//     try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// const githubUsersApi = `https://api.github.com/users?per_page=80`;


// function renderUsers(data) {
//     usersWRapper.innerHTML = '';


//     data.forEach((user) => {
//         const card = document.createElement('div');
//         card.classList.add('card');

//         const { avatar_url, login } = user;
//         const image = document.createElement('img');
//         image.src = avatar_url;
//         const username = document.createElement('h3');
//         username.textContent = login;
//         card.appendChild(image);
//         card.appendChild(username);
//         usersWRapper.appendChild(card);
//     })
// }
// getData(githubUsersApi).then((data) => renderUsers(data));

// const searchGithubUrl = 'https://api.github.com/search/users?q=';


// form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const searchValue = searchInput.value.trim().toLowerCase();
//     const users = await getData(`${searchGithubUrl}${searchValue}`);
//     renderUsers(users.items);
//     form.reset()
// });


// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWJhNWQ3MDU0YWQ0MjI1NTYxZmZhY2I3ODNiZTNjNiIsInN1YiI6IjYzZmRiZGVhOTY1M2Y2MDA4OTRkZGRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H9HmGuunZ9jgasuxWRCTWIndQ8lzrUO3oBb9Etn4JGo'
//     }
// };

// fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


// const myPromise = new Promise((resolve, reject) => {
//     const number = 15;

//     if (number > 10) {
//         resolve('Muvaffaqiyatli');
//     } else {
//         reject('Error')
//     }
// });
// console.log(myPromise);

// myPromise.then((data) => console.log(data));



const searchInput = document.getElementById('searchInput');
const form = document.getElementById('form');
const moviesWrapper = document.getElementById('countryContainer');



const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWJhNWQ3MDU0YWQ0MjI1NTYxZmZhY2I3ODNiZTNjNiIsInN1YiI6IjYzZmRiZGVhOTY1M2Y2MDA4OTRkZGRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H9HmGuunZ9jgasuxWRCTWIndQ8lzrUO3oBb9Etn4JGo'
    }
};

let page = 1;
const moviesUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=${page}&sort_by=popularity.desc`;

const searchUrl = 'https://api.themoviedb.org/3/search/movie?query='



async function getMovies(url) {
    try {
        const response = await fetch(url, options);
        if (response.status !== 200) {
            console.log(`Response status error ${response.status}`);
        }

        const movies = await response.json();
        return movies;

    } catch (error) {
        console.error(error);
    }
}

const imageUrl = 'https://image.tmdb.org/t/p/w500';
function renderMovies(movies) {
    moviesWrapper.innerHTML = '';
    movies.forEach((movie) => {
        const { backdrop_path, original_title, overview, vote_average } = movie;
        console.log(movie);
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = imageUrl + backdrop_path;
        image.alt = overview;

        const title = document.createElement('h2');
        title.textContent = original_title;

        const desc = document.createElement('p');
        const trimmedOverview = overview.substring(0, 100);
        desc.textContent = trimmedOverview;

        const rating = document.createElement('span');
        rating.textContent = vote_average;



        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(rating);

        moviesWrapper.appendChild(card);


    })

}

getMovies(moviesUrl).then((movies) => renderMovies(movies.results));



form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchValue = searchInput.value.trim().toLowerCase();
    const movies = await getMovies(`${searchUrl}${searchValue}`);
    renderMovies(movies.results);
    form.reset()
});



// https://developer.themoviedb.org/reference/trending-movies


