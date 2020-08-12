// Iteration #1: Find the maximum

function maxOfTwoNumbers(a,b) {
  if (a > b) {
    return a;
  }
  else return b;
}

// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord (palavras) {
  if(palavras == null | palavras.length == 0) return null;
  let currentLongestWord = palavras[0];
  
  for ( i = 0; i < palavras.length; i++) {
    if(palavras[i].length > currentLongestWord.length) {
      currentLongestWord = palavras[i]
    }
  }
  return currentLongestWord;
}



findLongestWord(words)

// Iteration #3: Calculate the sum

const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let currentSum = 0;
  for ( i= 0 ;i < numbers.length; i++ ) {
    currentSum = currentSum + numbers[i];
  }
  return currentSum ;
}


sumNumbers(numbers)

// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNums(numbers) {
  return sumNumbers(numbers) / numbers.length
}
 
// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averegeLenght (words) {
  let g = 0
   for (i=0; i < words.lenght ; i++   ) {
      g = g + words[i].length / words.length;
   }
   return g
}

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(words) {
  for (i=0; i< words.length; i++ ) {
    let nextPos = 0;
    while(nextPos >= 0) {
      nextPos = words.indexOf(words[i], i + 1);
      if(nextPos != -1) {
        words.splice(nextPos, 1);
      }
    }
  }
}


// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
