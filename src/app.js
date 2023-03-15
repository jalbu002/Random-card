/* eslint-disable */

import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let generateRandomNumber = () => {
  let numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSuit = () => {
  let suit = ["♦", "♥", "♠", "♣"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  if (suit[indexSuit] == "♥" || suit[indexSuit] == "♦") {
    let el = document.querySelector(".top-suit");
    el.classList.add("red");
    let el2 = document.querySelector(".bottom-suit");
    el2.classList.add("red");
  }
  return suit[indexSuit];
};

window.onload = () => {
  //write your code here
  document.querySelector(".number").innerHTML = generateRandomNumber();

  let v = generateRandomSuit();
  document.querySelector(".bottom-suit").innerHTML = v;
  document.querySelector(".top-suit").innerHTML = v;
};
