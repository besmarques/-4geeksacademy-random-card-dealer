/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const symbol = ["&#9824;", "&#9829", "&#9830;", "&#9827;"];
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
  let htmlSymbol = Math.floor(Math.random() * 4);
  let htmlValue = Math.floor(Math.random() * value.length);
  for (let i = 0; i < document.getElementsByClassName("symbol").length; i++) {
    document.getElementsByClassName("symbol")[i].innerHTML = symbol[htmlSymbol];
    if (
      document.getElementsByClassName("symbol")[i].innerHTML == "♥" ||
      document.getElementsByClassName("symbol")[i].innerHTML == "♦"
    ) {
      document.getElementsByClassName("symbol")[i].style.color = "red";
    }
  }
  for (let z = 0; z < document.getElementsByClassName("values").length; z++) {
    document.getElementsByClassName("values")[z].innerHTML = value[htmlValue];
  }
};
