"use strict";

const quote = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");

const randomQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
};

quoteBtn.addEventListener("click", randomQuote);
