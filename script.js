"use strict";

/*
 - event on button guess

- strings of words in array? for secret word ✅
- generate random word ✅
 - put a random word from array to be word we're guessing ✅

- value of input
- only put in one letter at the time

- check if letter is there - if inpput is part of secretWord
- put correct guessed letter on their spot
- show word
- show win if guessed the word correctly

 - lower number of guesses if wrong
- populate ul guessed letteres with guesses from input if wrong
 
 - show end game if no more guesses remained
 - show try again button

 - event on button play again (playing = false  ???)

*/

// document.querySelector("play-again").addEventListener("click", function () {});

const words = ["unbeliebubble", "dorime", "lovely", "slady", "yuri"];
let random = words[Math.floor(Math.random() * words.length)];
const guessButton = document.querySelector("guessBtn");

guessButton.addEventListener("click", function () {
  let secretWord = random;
  console.log(secretWord);
  const input = document.querySelector("letter").value;
});