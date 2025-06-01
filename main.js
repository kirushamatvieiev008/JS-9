// // task1

// const logItems = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     console.log(`Номер елементу:${i + 1}, Значення елементу: ${array[i]}`);
//   }
// };

// const names = ["Mango", "Poly", "Ajax"];

// logItems(names);


// // task2

// // Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

// const calculateEngravingPrice = (message, pricePerWord) => {
//   const arrayMessage = message.split(` `);
//   sum = arrayMessage.length * pricePerWord;
//   return sum
// }

// const phrase = prompt(`enter ur message`);
// const price = prompt(`enter price per word`);
// console.log(calculateEngravingPrice(phrase, Number(price)));

// // task 3
// const lorem = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis omnis suscipit explicabo libero similique quia! Ducimus, obcaecati facilis. Facilis, iste.`;

// const findLongestWord = (string) => {
//     const arrayWords = string.split(` `);
//     let longestWord = ``;
//     for (let i = 0; i < arrayWords.length; i++) {
//       if (arrayWords[i].length > longestWord.length) {
//           longestWord = arrayWords[i];
//         }
        
//     }
//     // console.log(longestWord);
//     return longestWord
    
// }


// console.log(findLongestWord(lorem));

// // task 4

// const formatString = (stringToFormat) => {
//     const wordsInString = stringToFormat.split(``);
//     let okString = ``
//     if (wordsInString.length > 40) {
//       okString = wordsInString.splice(40, wordsInString.length - 40, `...`);
//     }

//     return wordsInString.join(``);
// }

// const leremTask4 = prompt(`enter string`);

// console.log(formatString(leremTask4));


// // task5

// const checkForSpam = (message) => {
//     let bool = false;
//     if (message.includes(`spam`) || message.includes(`sale`)) {
//         bool = true;
//     }
//     return bool
// }

// const userMessage = prompt(`enter your offer`);

// console.log(checkForSpam(userMessage));


// task6
// const numbersFirst = Number(prompt(`enter number first`));
// console.log(numbersFirst);


// const sumNumbers = (num) => {
//   if (num !== 0) {
//     let sum = 0;
//     for (let i = 0; i < 100000; i++) {
//       const secondNum = Number(prompt(`enter number`));
//       sum += secondNum;
//       if (secondNum === 0) {
//         break
//       }
//     }
//     return sum
//   }
// }

// console.log(sumNumbers(numbersFirst));


let sum = 0;
let firstNum;
do {
  firstNum = prompt(`enter first num`);
  sum += Number(firstNum);
} while (firstNum !== null);
console.log(sum);
