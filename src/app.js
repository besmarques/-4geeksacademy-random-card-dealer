/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["hearts", "spades", "clubs", "diamonds"];
const symbol = ["&#9829;", "&#9824;", "&#9827;", "&#9830;"];
const value = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = function() {
  //write your code here

  let suitGenerated = suits[Math.floor(Math.random() * 4)];
  console.log(suitGenerated);

  document.getElementsByClassName("card")[0].classList =
    "card " + suitGenerated + " col-3 mt-5 mb-5 p-2";
  let htmlSymbol = "";

  if (suitGenerated == "hearts") {
    htmlSymbol = 0;
  } else if (suitGenerated == "spades") {
    htmlSymbol = 1;
  } else if (suitGenerated == "clubs") {
    htmlSymbol = 2;
  } else {
    htmlSymbol = 3;
  }

  let htmlValue = Math.floor(Math.random() * value.length);
  for (let i = 0; i < document.getElementsByClassName("symbol").length; i++) {
    document.getElementsByClassName("symbol")[i].innerHTML = symbol[htmlSymbol];
  }
  for (let z = 0; z < document.getElementsByClassName("values").length; z++) {
    document.getElementsByClassName("values")[z].innerHTML = value[htmlValue];
  }
};
