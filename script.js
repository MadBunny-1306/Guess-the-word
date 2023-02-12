"use strict";

/*
 - event on button guess

- strings of words in array? for secret word ✅
- generate random word ✅
 - put a random word from array to be word we're guessing ✅

- value of input ✅
- only put in one letter at the time ✅

- check if letter is there - if input is part of secretWord ✅
- put correct guessed letter on their spot
- show word
- show win if guessed the word correctly

 - lower number of guesses if wrong
- populate ul guessed letteres with guesses from input if wrong
 
 - show end game if no more guesses remained
 - show try again button

 - event on button play again (playing = false  ???)

*/

// document.querySelector(".play-again").addEventListener("click", function () {});

const words = ["unbeliebubble", "dorime", "lovely", "slady", "yuri"];
// let play = true;
const guessButton = document.querySelector(".guessBtn");
const input = document.querySelector(".letter").value.toUpperCase();

const showWord = document.querySelector(".word-in-progress");
let numberOfGuesses = document.querySelector(".number");
let number = 8;
numberOfGuesses.innerHTML = number;

const incorrectLetters = [];
const showWrong = document.querySelector(".guessed-letters");

//- generate random word
let secretWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
console.log(secretWord);
const stringArr = [...secretWord];
console.log(stringArr);

// - show _ instead of letters in a secret word
showWord.innerHTML = secretWord.replace(/./gi, "_");

// const checkLetter = function () {};

// - event on button guess
guessButton.addEventListener("click", function () {
  // - check if letter is there
  for (const letter of stringArr) console.log(letter);
  if (input !== letter) {
    console.log("test");
    incorrectLetters.push(input);
    console.log(incorrectLetters);
    showWrong.innerHTML = [...incorrectLetters];
  }
  // else {
  //   // number--;
  // }
});
