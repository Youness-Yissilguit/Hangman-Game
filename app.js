//create letters
let letters = "abcdefjhigklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
lettersArray.forEach(letter=> {
  let span = document.createElement('span');
  let spanContent = document.createTextNode(letter);
  span.appendChild(spanContent);
  span.className = 'letter-box';
  document.querySelector('.game-container .letters').appendChild(span);
});
//get random property
const properties = {
  programming:['html', 'css', 'javascript', 'paython', 'bootstrapp', 'responsive design'],
  country: ['morocco', 'egypt', 'france', 'qatar'],
  names: ['ahmed', 'youness', 'fatim zahra', 'kawtar', 'hamza']
};
const allKeys = Object.keys(properties);
let randomProp = allKeys[Math.floor(Math.random() * allKeys.length)];
let randomKeys = properties[randomProp];
let randomValNum = Math.floor(Math.random() * randomKeys.length)
let randomValValue = randomKeys[randomValNum];
let wrongTrays = 0;
let counter = 0;
//set the word from value
document.querySelector('.game-info .word-from span').innerHTML = randomProp;

//call the letter-guess
const letterGuessContainer = document.querySelector('.letter-guess');
//array from the choosen word
let choosenWordArray = Array.from(randomValValue);
//loop trough the array and create spans
choosenWordArray.forEach(letter => {
  let theSpan = document.createElement('span');
  if(letter === ' '){
    theSpan.className =  'has-space';
    counter = 1;
  };
  letterGuessContainer.appendChild(theSpan);
});
//handel the clecking events
document.addEventListener('click', (e) => {
  if( e.target.className === 'letter-box'){

    //add the default status
    let status = false;
    //add the clicking class
    e.target.classList.add('clicked');

    //save the letter value
    let clickedLetter = e.target.innerHTML.toLowerCase();

    //loop inside the choosen random word
    choosenWordArray.forEach((wordLetter, index) => {
      //if the clicked letter is in the choosen word
      if (wordLetter == clickedLetter) {
        //add the the letter to the guess span
        document.querySelectorAll('.letter-guess span')[index].innerHTML = clickedLetter;
        //it's correct
        status = true;
        counter++;
        //if the player win
        console.log(counter);
      }
    });
    //if it's a false answar
    if (status !== true) {
      if(wrongTrays === 7){
        document.querySelector('.game-container .letters').classList.add('lose');
        document.querySelector('.game-finish').classList.add('show');
        document.querySelector('.game-finish h2 span').innerHTML = randomValValue;
      } else{
        //increes the wrong trays
        wrongTrays++;
        //add the class wrong-${index}
        document.querySelector('.game-container .row .hangman-draw .the-draw').classList.add(`wrong-${wrongTrays}`);
      }
    }
    //if the player win
    if(counter === choosenWordArray.length){
      document.querySelector('.game-win').classList.add('win');
    }

  }
});
