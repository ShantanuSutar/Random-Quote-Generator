"use strict";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");

const randomQuote = () => {
  quoteBtn.classList.add("loading");
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      quote.textContent = result.content;
      author.textContent = result.author;
      quoteBtn.classList.remove("loading");
      quoteBtn.textContent = "New Quote";
    });
};

quoteBtn.addEventListener("click", randomQuote);
