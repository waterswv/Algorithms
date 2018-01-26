
// Take a string and convert it to CamelCase with no spaces

const str = 'camel case five';

function camelCase(str){
  words = str.split(' ')
  console.log(words);
  letters = words.map(str => str.split(''));
  console.log(letters);
  theWord = "";
  function wordCombine (word){
    console.log('The Word is ', word);
    for (i=0; i<word.length; i++){
      if(i === 0)
      {theWord += word[0].toUpperCase();
      console.log(theWord);
      }
      else {
        theWord += word[i]
      }
    }
  }

letters.forEach(str => wordCombine(str));


  console.log(theWord);

}
camelCase(str);

// Kata Solution ... using prototype language ...

String.prototype.camelCase=function(){
   return this.split(' ').map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join('');
}
