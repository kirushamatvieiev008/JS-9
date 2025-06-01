// task1

const logItems = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`Номер елементу:${i + 1}, Значення елементу: ${array[i]}`);
  }
};

const names = ["Mango", "Poly", "Ajax"];

logItems(names);

// task 3
const lorem = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis omnis suscipit explicabo libero similique quia! Ducimus, obcaecati facilis. Facilis, iste.`;

const findLongestWord = (string) => {
    const arrayWords = string.split(` `);
    let longestWord = ``;
    for (let i = 0; i < arrayWords.length; i++) {
      if (arrayWords[i].length > longestWord.length) {
          longestWord = arrayWords[i];
        }
        
    }
    // console.log(longestWord);
    return longestWord
    
}


console.log(findLongestWord(lorem));

// task 4

const formatString = (stringToFormat) => {
    const wordsInString = stringToFormat.split(``);
    let okString = ``
    if (wordsInString.length > 40) {
      okString = wordsInString.splice(40, wordsInString.length - 40, `...`);
    }

    return wordsInString.join(``);
}

const leremTask4 = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis omnis suscipit explicabo libero similique quia! Ducimus, obcaecati facilis. Facilis, iste.`;

console.log(formatString(leremTask4));


// task5

const checkForSpam = (message) => {
    let bool = false;
    if (message.includes(`spam`) || message.includes(`sale`)) {
        bool = true;
    }
    return bool
}

const userMessage = prompt(`enter your offer`);

console.log(checkForSpam(userMessage));


// task6

