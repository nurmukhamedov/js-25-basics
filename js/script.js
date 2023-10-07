// function multiplyArray(numbers, num) {
//     const newArray = [];
//     for (const element of numbers) {
//         newArray.push(element * num);
//     }
//     return newArray;
// }

// console.log(multiplyArray([1, 2, 3, 4, 5], 2));
// console.log(multiplyArray([1, 2, 3, 4, 5], 3));


const fruits = ["banana", "apple", "ananas", "pineapple", "strawberry"];

// const newFruits = fruits.slice(1, 4);

// console.log(newFruits);


// fruits.splice(1, 3);
// console.log(fruits);

// const myIndex = fruits.indexOf("apple");
// console.log(myIndex);


// function removeLetter(word, letter) {
//     let result = '';

//     for (const char of word) {
//         if (char !== letter) {
//             result += char;
//         }
//     }

//     return result;
// }

// const inputWord = "hello";
// const letterToRemove = "o";
// const result = removeLetter(inputWord, letterToRemove);
// console.log(result);


// function removeLetter(word, letter) {
//     const wordArray = word.split('');
//     const letterIndex = wordArray.indexOf(letter);

//     if (letterIndex !== -1) {
//         wordArray.splice(letterIndex, 1);
//         return wordArray.join('');
//     } else {
//         return word;
//     }
// }

// const inputWord = "example";
// const letterToRemove = "e";
// const result = removeLetter(inputWord, letterToRemove);



// function removeLetter1(word, letter) {
//     let newLetter = '';
//     for (const element of word) {
//         if (element !== letter) {
//             newLetter += element;
//         }
//     }
//     return newLetter;

// }
// console.log(removeLetter1("hello", "l"));
// console.log(removeLetter1("uzbekistan", "u"));


function removeLetter2(word, letter) {
    const wordArray = word.toLowerCase().split('');
    const indexOfSearchLetter = wordArray.indexOf(letter.toLowerCase());

    if (indexOfSearchLetter !== -1) {
        wordArray.splice(indexOfSearchLetter, 1);
        return wordArray.join('')
    } else {
        return word
    }
}

console.log(removeLetter2('Hello', 'E'));

// const numbers = [1, 2, 3, 4, 5, 6];

// function checkNum(num) {
//     if (num > 3) {
//         return num
//     }
// }

// const checkArrayNum = numbers.every((num) => num > 2);

// console.log(checkArrayNum);


const numbers = [7, 5, 9, 11, 2, 4, 6, 8, 10, 12, 14];

// arrayni tekshirasiz agar ichida hamma son juft son bo'lsa hammasi juft degan narsa chiqsin console, aks holda toq son bor ichida.



// const element = numbers.find((num) => num % 2 == 0)
// console.log(element);

// numbers.forEach((element, index, array) => {
//     array[index] = element * 3;
// })

// console.log(numbers);


function returnNewArray(numbers) {
    return numbers.splice(0, 3)
}




