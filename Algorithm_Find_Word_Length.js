// The goal of this algorithm exercise is to find the length of the longest word in a sentence & what that word is.

var mySentence = "The cat is up in the tree";

var longestWord = "";

var myWordArr = mySentence.split(" ");

function wordLength (arr){
    arr.forEach(function(i){
        if (i.length > longestWord.length ){
            longestWord = i;
         }
    })

    return `The lognest word is ${longestWord} which is ${longestWord.length} letters long.`;
}

console.log(wordLength(myWordArr));


//Solution code provided:

          function findLongestWordLength(str) {
            let wordsArr = str.split(' ');
            let wordLengths = wordsArr.map(function(word){
              return word.length;
            });

            return Math.max.apply(null, wordLengths);
          };

          function findLongestWord(str){
            let wordsArr = str.split(' ');
            let wordLengths = wordsArr.map(function(word){
              return word.length;
            });

            let longestWordLength = Math.max.apply(null, wordLengths);

            let index = wordLengths.indexOf(longestWordLength);
            console.log(wordsArr[index]);
            return wordsArr[index];
          };

          function findLongestWords(str){
            let maxLength = findLongestWordLength(str);
            let wordsArr = str.split(' ');
            let wordsOfMaxLength = wordsArr.filter(function(word){
              return word.length === maxLength;
            })
            return wordsOfMaxLength
          };
