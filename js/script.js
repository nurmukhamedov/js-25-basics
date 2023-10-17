const main = document.querySelector('.main .row');
const cars = [
    {
        name: 'BMW',
        model: 'X7',
        price: 240,
        quantity: 8,
        image: 'https://imgd-ct.aeplcdn.com/0x0/n/cw/ec/132513/new-7-series-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80'
    },
    {
        name: 'Gentra',
        model: '1.5',
        price: 20,
        quantity: 15,
        image: 'https://www.bmwgroup.com/content/dam/grpw/websites/bmwgroup_com/brands/einstiegsseite/1280x854_P90351044_highRes_the-new-bmw-8-series.jpg'
    },
    {
        name: 'Mercedes',
        model: 'S Class',
        price: 280,
        quantity: 2,
        image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/140591/new-x1-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80'
    },
    {
        name: 'BYD',
        model: 'Song',
        price: 50,
        quantity: 20,
        image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/140591/new-x1-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80'
    },
    {
        name: 'BYD',
        model: 'Chazor',
        price: 40,
        quantity: 18,
        image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/140591/new-x1-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80'
    },
    {
        name: 'Mercedes',
        model: 'M 300',
        price: 120,
        quantity: 22,
        image: 'https://imgd.aeplcdn.com/642x336/n/cw/ec/140591/new-x1-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80'
    },
]

function updateCard() {
    main.innerHTML = '';
    cars.forEach((car) => {
        const columns = document.createElement('div');
        columns.classList.add('col-lg-4');

        const card = document.createElement('div');
        card.classList.add('card');
        columns.appendChild(card);

        const image = document.createElement('img');
        image.src = car.image;
        image.alt = car.name;
        card.appendChild(image);

        const name = document.createElement('h4');
        name.textContent = car.name;
        card.appendChild(name);

        const price = document.createElement('span');
        price.textContent = car.price;
        card.appendChild(price);

        main.appendChild(columns);
    })

}

updateCard();

const buttonAtoZ = document.querySelector('.a-z');
const buttonZtoA = document.querySelector('.z-a');
const buttonLowtoHigh = document.querySelector('.low-high');
const buttonHightoLow = document.querySelector('.high-low');

const reset = document.querySelector('.reset');


if (buttonAtoZ) {
    buttonAtoZ.addEventListener('click', () => {
        cars.sort((a, b) => a.name.localeCompare(b.name));
        updateCard();
    })
}
if (buttonZtoA) {
    buttonZtoA.addEventListener('click', () => {
        cars.sort((a, b) => b.name.localeCompare(a.name));
        updateCard();
    })
}

if (buttonLowtoHigh) {
    buttonLowtoHigh.addEventListener('click', () => {
        cars.sort((a, b) => a.price - b.price);
        updateCard();
    })
}
if (buttonHightoLow) {
    buttonHightoLow.addEventListener('click', () => {
        cars.sort((a, b) => b.price - a.price);
        updateCard();
    })
}

// Quyida berilgan Object dagi shaxslar daromadlarini jamini xisoblab chiqaruvchi funksiya yozing. Funksiya PURE (toza) bo’lishi shart!
// let salaries = {John: 100, Ann: 160,Pete: 130}


