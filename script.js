"use strict";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");

const randomQuote = () => {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quote.textContent = result.content;
      author.textContent = result.author;
    });
};

quoteBtn.addEventListener("click", randomQuote);
