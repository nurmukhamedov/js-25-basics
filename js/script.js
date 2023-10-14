// const numbers = [18, 22, 74, 68, 5, 6, 7, 8, 9, 10];

// numbers.splice(1, 2, 10, 11);

// console.log(numbers);

// const names = ['Bob', 'John', 'Jack', 'Alice'];

// const newNames = names.slice(0, 3);
// console.log(newNames);

// const ages = [22, 30, 60, 74, 65];
// const checkAges = ages.some((age) => age > 65);

// console.log(checkAges);

// const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// const filteredNames = names.filter((name) => name.length > 4).map((name) => name.toLocaleUpperCase());

// console.log(filteredNames);

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// function changeNums(array, num) {
//     const newNums = array.map((number) => number * num);
//     return newNums;
// }

// console.log(changeNums(numbers, 2));
// console.log(changeNums(numbers, 3));
// console.log(changeNums(numbers, 4));



// for (let index = 0; index <= 10; index++) {
//     if (index > 4) {
//         break;
//     }

//     console.log(index);
// }

// let count = 0;

// while (count <= 5) {
//     console.log(count);
//     count++
// }

// let count = 4;

// do {
//     count++;
//     console.log(count);
// } while (count <= 0);


// const targetNumber = 42;

// let randomNumber;

// let randomCount = 0

// while (true) {
//     randomNumber = Math.round(Math.random() * 50 + 1);
//     randomCount++
//     if (randomNumber === targetNumber) {
//         console.log(randomNumber);
//         break;
//     }
// }

// console.log(randomCount);

// const person = {
//     firstName: 'Muhammadrasul',
//     lastName: 'Nurmukhamedov',
//     age: 23,
//     greeting: function () {
//         return `Salom ismim ${this.firstName} familiyam ${this.lastName}, yoshim ${this.age}, nomerizi berasimi?`
//     }
// }

// const person2 = {
//     firstName: 'Bob',
//     lastName: 'Borber',
//     age: 33,
//     hello: person.greeting
// }

// for (const key in person2) {
//     let element = person2[key];
//     if (typeof element === 'number') {
//         element = element * 2
//     }

//     console.log(element);
// }

// console.log(person2.hello());


const main = document.querySelector('.main .row');

const cars = [
    {
        model: 'BMW X7',
        price: 200,
        image: 'https://img-c.drive.ru/models.large.main.images/0000/000/000/001/3af/48d6ad46c4f5acdd-main.jpg',
        characters: {
            about: 'Uydan ishga qatnagan, ayol kishi mingan, yengi',
            extra: [
                'Malibu rul', '2 yillik tarinovka ruhsatnoma'
            ]
        }
    },
    {
        model: 'Mercedes',
        price: 70,
        image: 'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/e27b2279-28f5-4cfe-b012-f6d5ebf0a44a/Mercedes%20S-Class%202020%20%2810%29.jpg',
    },
    {
        model: 'Tesla',
        price: 90,
        image: 'https://assets-eu-01.kc-usercontent.com/3b3d460e-c5ae-0195-6b86-3ac7fb9d52db/1ce5ecec-cb1e-4be7-918f-b1d89e2967f9/Tesla%20Model%20X%20%283%29.jpg?fm=jpg&auto=format'
    },
    {
        model: 'Gentra',
        price: 15,
        image: 'https://frankfurt.apollo.olxcdn.com/v1/files/lznicefrc5ry2-UZ/image;s=1000x751'
    }
]

for (let car of cars) {
    main.innerHTML += `
    <div class="col-lg-4">
    <div class="card" style="width: 18rem;">
        <img src="${car.image}"
            class="card-img-top" alt="${car.model}">
        <div class="card-body">
            <h5 class="card-title">${car.model}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk
                of
                the card's content.</p>
                <span>Price ${car.price}k</span>
        </div>
    </div>
</div>
    `
}