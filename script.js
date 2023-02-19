"use strict";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author .name");
const quoteBtn = document.querySelector("button");
const soundBtn = document.querySelector(".sound");
const copyBtn = document.querySelector(".copy");
const twitterBtn = document.querySelector(".twitter");

const randomQuote = () => {
  quoteBtn.classList.add("loading");
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((result) => {
      quote.textContent = result.content;
      author.textContent = result.author;
      quoteBtn.classList.remove("loading");
      quoteBtn.textContent = "New Quote";
    });
};

quoteBtn.addEventListener("click", randomQuote);

soundBtn.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quote.textContent} by ${author.textContent}`
  );
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.textContent);
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url= ${quote.textContent}`;
  window.open(tweetUrl, "_blank");
});
